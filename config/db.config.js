const mongoose = require('mongoose');
require('dotenv').config();

function connectDb(){
    mongoose.connect(process.env.MONGODB_URI,{
        // useNewUrlParser: true, // new connection string method
        // useUnifiedTopology: true, // new topology for mongodb driver
    })
    .then(()=>{
        console.log('MongoDB connected');
    })
    .catch((err)=>{
        console.log(err);
    })
}

module.exports = connectDb;
