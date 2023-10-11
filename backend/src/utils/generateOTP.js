const otpGenerator = require('otp-generator')

const generateOTP = ({ length = 6 }) => {
    return otpGenerator.generate(length, { upperCaseAlphabets: false, specialChars: false });
}
module.exports = generateOTP