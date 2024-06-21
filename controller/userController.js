const mongoose = require('mongoose');
const User = require('../model/userModel');

async function addUser(req, res){
    try{
        const newUser = new User(req.body)
        result = await newUser.save()

      return  res.status(200).send({message: "user added successfully", result})
    }
    catch(error){
     return   res.status(500).send(error)
    }
   
};

async function getAllUser(req,res){
    try {
        const result = await User.find();
        
       return res.status(200).send(result);
    } catch (error) {
        
       return res.status(500).send(error);
    }
}

async function deleteUser(req,res){
    try {
        const result = await User.findByIdAndDelete(req.params.id);
        return res.status(200).send({message: "user deleted successfully", result});
    } catch (error) {
        return res.status(500).send(error);
    }
}



module.exports = {
    addUser,
    getAllUser,
    deleteUser
}