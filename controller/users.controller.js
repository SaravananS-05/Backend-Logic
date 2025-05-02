const express = require('express');
const { createUser } = require('../services/users.service');
exports.createUser = async function(req,res){
    try{
        const payload = req.body;
        await createUser(payload);
        res.status(201).json({
            status: true,
            message: "user registered successfully"
        })
    }
    catch(err){
        res.status(400).json({
            status: false,
            message: err.message
        });
    }
}
