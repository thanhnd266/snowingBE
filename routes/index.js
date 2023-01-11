const express = require('express');
const userRouter = require('./users');
const authRouter = require('./auth');
const workoutRouter = require('./workout');

const router = express.Router();

router.use('/auth', authRouter);
router.use('/user', userRouter);
router.use('/workout', workoutRouter);

module.exports = router;