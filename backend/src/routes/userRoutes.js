const express = require('express');
const routes = express.Router();
const { doSignup, doLogin, doFetchCurrentUser, doConfirmOTP, forgetPassword, doResetPassword } = require('../controller/userController');
const { verifyUser } = require('../utils/verifyUser');
routes.post('/signup-user', doSignup)
routes.post('/login-user', doLogin)
routes.get('/fetch-current-user', verifyUser, doFetchCurrentUser)
routes.post('/confirm-otp', doConfirmOTP)
routes.post('/forget-password', forgetPassword)
routes.post('/reset-password', doResetPassword)

module.exports = routes;

