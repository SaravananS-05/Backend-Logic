const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const connectDb = require('./config/db.config');
const morgan = require('morgan');
const userRoute = require('./routes/users.route');
const app = express();
app.use(morgan('dev'));
app.use(express.json());
app.use('/api',userRoute);

connectDb();

module.exports = app;