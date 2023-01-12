const express = require('express');
const { getListPost } = require('../controller/post/list');


const postRouter = express.Router();

postRouter.get('/list', getListPost);

module.exports = postRouter;