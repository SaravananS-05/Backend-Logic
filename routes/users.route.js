const express = require('express');
const usersRouter = express.Router();
const { createUser } = require('../controller/users.controller');

usersRouter.post('/create_user',createUser);

module.exports = usersRouter;