const mongoose = require('mongoose');
const userModel = require('../models/users.model')
class usersService{
    async createUser(payload){
        // const { username, email, password, details } = payload;
        // const userData = {
        //     username,
        //     email,
        //     password,
        //     details
        //   };          
        // console.log(details.personal.name.firstName);
        // await userModel.create(userData);
    }
}

const userService = new usersService();
module.exports = userService;