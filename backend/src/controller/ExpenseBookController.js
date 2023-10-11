const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
require('dotenv').config();


const doCreateBook = async (req, res) => {
    try {
        const { name, userId } = req.body
        const createBook = await prisma.ExpenseBook.create({
            data: {
                name,
                userId
            }
        })
        console.log("creted book", createBook);
        const response = {
            createBook,
            message: "successfull"
        }
        res.status(200).json(response)
    }
    catch (error) {
        console.log("error in ", error.message)
        const response = {
            error,
            message: "unsuccessfull"
        }
        res.status(500).json(response)
    }
    finally {
        await prisma.$disconnect()
    }
}
const doUpdateBook = async (req, res) => {
    try {
        const bookId = req.params.id
        console.log("book id", bookId);
        console.log("req.body", req.body);
        const name = req.body.name
        console.log("name in body", name);
        const updatedBook = await prisma.ExpenseBook.update({
            where: {
                id: bookId
            },
            data: {
                name
            }
        })
        console.log("updated book is", updatedBook);
        const response = {
            updatedBook,
            message: "successfull"
        }
        res.status(200).json(response)
    }
    catch (error) {
        console.log("error in ", error.message)
        const response = {
            error,
            message: "unsuccessfull"
        }
        res.status(500).json(response)
    }
    finally {
        await prisma.$disconnect()
    }
}
const doDeleteBook = async (req, res) => {
    try {
        const bookId = req.params.id
        console.log("bookdId", bookId);
        await prisma.ExpenseBook.delete({
            where: {
                id: bookId
            }
        })
        const response = {
            message: "successfull"
        }
        res.status(200).json(response)
    }
    catch (error) {
        console.log("error in ", error.message)
        const response = {
            error,
            message: "unsuccessfull"
        }
        res.status(500).json(response)
    }
    finally {
        await prisma.$disconnect()
    }
}
const doGetBooks = async (req, res) => {
    try {

        const response = {
            message: "successfull"
        }
        res.status(200).json(response)
    }
    catch (error) {
        console.log("error in ", error.message)
        const response = {
            error,
            message: "unsuccessfull"
        }
        res.status(500).json(response)
    }
    finally {
        await prisma.$disconnect()
    }
}
module.exports = { doCreateBook, doUpdateBook, doDeleteBook, doGetBooks }