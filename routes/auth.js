const express = require('express');
const detailUser = require('../controller/auth/detailUser');
const loginController = require('../controller/auth/login');
const reloginController = require('../controller/auth/relogin');
const logoutController = require('../controller/auth/logout');

//middleware
const { verifyRefreshToken, authenticate } = require('../middleware/auth/authenticate');

const authRouter = express.Router();

authRouter.post('/login', loginController);
authRouter.post('/relogin', verifyRefreshToken, reloginController);
authRouter.post('/logout', authenticate, logoutController);
authRouter.post('/user/detail', authenticate, detailUser);

module.exports = authRouter;