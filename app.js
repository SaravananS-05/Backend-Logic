const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const connectDb = require('./config/db.config');
const morgan = require('morgan');
const usersRouter = require('./routes/users.route');
const app = express();
app.use(morgan('dev'));
app.use(express.json());
app.use('/api/users',usersRouter);

connectDb();

module.exports = app;