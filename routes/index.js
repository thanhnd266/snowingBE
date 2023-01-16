const express = require('express');
const userRouter = require('./user');
const authRouter = require('./auth');
const postRouter = require('./post');

const router = express.Router();

router.use('/auth', authRouter);
router.use('/user', userRouter);
router.use('/post', postRouter);

module.exports = router;