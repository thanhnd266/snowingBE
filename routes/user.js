const express = require('express');
const { addWorkout } = require('../controller/user/addWorkout');
const { createUser } = require('../controller/user/create');
const { editUser } = require('../controller/user/edit');
const { getListUsers } = require('../controller/user/list');
const { removeWorkout } = require('../controller/user/removeWorkout');
const { authenticate } = require('../middleware/auth/authenticate');
const userRouter = express.Router();

userRouter.get('/', getListUsers);
userRouter.post('/create', createUser);
userRouter.post('/edit', editUser);
userRouter.post('/workout/add', authenticate, addWorkout);
userRouter.post('/workout/remove', authenticate, removeWorkout);

module.exports = userRouter;