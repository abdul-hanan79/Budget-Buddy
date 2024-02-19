const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const generateOTP = require('../utils/generateOTP')
require('dotenv').config();


const doSignup = async (req, res) => {
    try {
        console.log("singupUser", req.body)
        const { name, email, password } = req.body.user;
        const dbUser = await prisma.user.findUnique({
            where: {
                email,
            },
        });
        if (dbUser && dbUser.verified) {
            return res.status(400).json({ error: 'user already exist', message: 'unsuccessfull' });
        }
        const salt = await bcrypt.genSalt(10)
        const passwordHash = await bcrypt.hash(password, salt)
        const otp = generateOTP({})
        console.log("otp", otp);
        let newUser
        if (!dbUser) {
            newUser = await prisma.User.create({
                data: {
                    email,
                    password: passwordHash,
                    name,
                    otp,
                }
            })
        }
        else {
            newUser = await prisma.User.update({
                where: {
                    id: dbUser.id
                },
                data: {
                    otp,
                }
            })
        }
        console.log("signup user ", newUser)
        const response = {
            email: newUser.email,
            name: newUser.name,
            message: "successfull"
        };

        res.status(200).json(response)
    } catch (error) {
        console.log(error)
        const response = {
            error,
            message: 'unsuccessfull'
        }
        res.status(500).json(response)

    }
    finally {
        await prisma.$disconnect();
    }

}
const forgetPassword = async (req, res) => {
    try {
        const { email } = req.body.user;
        console.log("user email", email);
        const dbUser = await prisma.User.findUnique({
            where: {
                email
            }
        })
        console.log("db user is", dbUser);
        if (!dbUser) {
            return res.status(400).json({ error: "user not found", message: "unsuccessfull" })
        }
        const otp = generateOTP({})
        await prisma.User.update({
            where: {
                email,
            },
            data: {
                otp,
            }
        })
        const response = {
            otpSend: true,
            message: "successfull"
        }
        return res.status(200).json(response)
    } catch (error) {
        console.log("errror", error.message);
        const response = {
            error,
            message: "unsuccessfull"
        }
        res.status(500).json(response)
    }
    finally {
        await prisma.$disconnect();
    }
}
const doLogin = async (req, res) => {
    try {
        const { email, password } = req.body.user;
        console.log("login data", req.body.user)
        // Find user by email
        const dbUser = await prisma.user.findUnique({
            where: {
                email: email,
            },
        });
        console.log("user in login ", dbUser)
        if (!dbUser) {
            return res.status(400).json({ error: 'User not found', message: 'unsuccessfull' });
        }
        // Compare password
        const isPasswordMatch = await bcrypt.compare(password, dbUser.password);
        if (!isPasswordMatch) {
            return res.status(400).json({ error: 'Invalid password', message: 'unsuccessfull' });
        }
        const otp = generateOTP({})
        if (!dbUser.verified) {
            await prisma.User.update({
                where: {
                    id: dbUser.id
                },
                data: {
                    otp
                }
            })
        }
        // Generate token
        const token = jwt.sign({ userId: dbUser.id, email: dbUser.email }, process.env.JWT_SECRET, {
            expiresIn: '5 days',
        });
        console.log("token=>", token);
        const userDetails = {
            id: dbUser.id,
            name: dbUser.name,
            email: dbUser.email,
        }
        const response = {
            message: 'successfull',
            token: token,
            user: userDetails,
            otpSent: !dbUser.verified
        }
        // res.cookie('myCookie', 'cookieValue', { maxAge: 900000, httpOnly: true });
        // res.cookie("jwtToken", token, {
        //     expires: new Date(Date.now() + 2589200000),
        //     httpOnly: true
        // })
        return res.status(200).json(response);
    }
    catch (error) {
        console.log("error", error.message);
        const response = {
            error,
            message: 'unsuccessfull'
        }
        res.status(500).json(response)
    }
    finally {
        await prisma.$disconnect()
    }
}

const doFetchCurrentUser = async (req, res) => {
    try {
        const userId = req.userId
        console.log("user id", userId);
        console.log("user id", userId);
        const user = await prisma.user.findUnique({
            where: {
                id: userId,
            },
        });
        console.log("user in login ", user)
        const response = {
            id: user.id,
            name: user.name,
            email: user.email,
            message: 'successfull',
        }
        return res.status(200).json(response);
    } catch (error) {
        console.log("error in fetching current user", error.message);
        const response = {
            error,
            message: 'unsuccessfull'
        }
        return res.status(500).json(response)
    }
    finally {
        await prisma.$disconnect()
    }
}
const doConfirmOTP = async (req, res) => {
    try {
        // let { otp, mobileNumber } = req.body as {
        //     otp: string,
        //     mobileNumber: string,
        // }
        console.log("user details", req.body);
        const { otp, email } = req.body.user
        // if (!mobileNumber.includes("+")) {
        //     mobileNumber = `+${mobileNumber.trim()}`
        // }
        const dbUser = await prisma.user.findUnique({
            where: {
                email,
                otp
            }
        })
        if (!dbUser) {
            const response = {
                result: "otp is incorrect",
                message: 'unsuccessfull',
            }
            return res.status(400).json(response)
        }
        await prisma.user.update({
            where: {
                id: dbUser.id
            },
            data: {
                verified: true
            }
        })
        const response = {
            result: "otp is correct",
            message: 'successfull',
        }
        return res.status(200).json(response);
    }
    catch (error) {
        console.log("error in otp ", error.message);
        const response = {
            error,
            message: 'unsuccessfull'
        }
        return res.status(500).json(response)
    }
    finally {
        await prisma.$disconnect()
    }

}

const doResetPassword = async (req, res) => {
    try {
        const { email, otp, password } = req.body.user
        console.log(`email ${email}  otp ${otp}  passsword ${password}`);
        const dbUser = await prisma.user.findUnique({
            where: {
                email,
                otp
            }
        })
        if (!dbUser) {
            return res.status(400).json({ msg: "user not found" })
        }
        const salt = await bcrypt.genSalt(10)
        const passwordHash = await bcrypt.hash(password, salt)
        await prisma.User.update({
            where: {
                email,
            },
            data: {
                password: passwordHash
            }
        })
        const response = {
            result: "password changed",
            message: 'successfull',
        }
        return res.status(200).json(response);
    }
    catch (error) {
        console.log("error in otp ", error.message);
        const response = {
            error,
            message: 'unsuccessfull'
        }
        return res.status(500).json(response)
    }
    finally {
        await prisma.$disconnect()
    }
}
module.exports = { doSignup, doLogin, doFetchCurrentUser, doConfirmOTP, forgetPassword, doResetPassword }