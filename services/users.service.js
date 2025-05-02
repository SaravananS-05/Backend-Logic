const mongoose = require('mongoose');
const userModel = require('../models/users.model')
class usersService{
    async createUser(payload){
        const {username,email,password,details} = payload;
        console.log(details.personal.name.firstName);
        await userModel.create({payload});
    }
}