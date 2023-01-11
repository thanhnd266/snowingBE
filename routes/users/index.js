const express = require('express');
const { createUser } = require('../../controller/user/create');
const { editUser } = require('../../controller/user/edit');
const { getListUsers } = require('../../controller/user/list');
const userRouter = express.Router();

userRouter.get('/', getListUsers);
userRouter.post('/create', createUser);
userRouter.post('/edit', editUser);

module.exports = userRouter;