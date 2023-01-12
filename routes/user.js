const express = require('express');
const { addWorkout } = require('../controller/user/addWorkout');
const { createUser } = require('../controller/user/create');
const { editUser } = require('../controller/user/edit');
const { getListUsers } = require('../controller/user/list');
const { removeWorkout } = require('../controller/user/removeWorkout');
const userRouter = express.Router();

userRouter.get('/', getListUsers);
userRouter.post('/create', createUser);
userRouter.post('/edit', editUser);
userRouter.post('/workout/add', addWorkout);
userRouter.post('/workout/remove', removeWorkout);

module.exports = userRouter;