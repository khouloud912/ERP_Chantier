const express = require('express')
const Router = express.Router()
const t = require('../controllers/auth.controller');

const {
    validSign,
    validLogin,
    forgotPasswordValidator,
    resetPasswordValidator
} = require('../helpers/valid')

Router.post('/register',validSign,t.registerController);
Router.post('/login',validLogin, t.signinController);
Router.post('/activation', t.activationController);
Router.post('/LastRegistration', t.LastRegistration);

// forgot reset password
Router.put('/forgotpassword', forgotPasswordValidator, t.forgotPasswordController);
Router.put('/resetpassword', resetPasswordValidator, t.resetPasswordController);
module.exports = Router