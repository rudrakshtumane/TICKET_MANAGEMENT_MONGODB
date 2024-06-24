const mongoose = require('mongoose');
const Ticket = require('../model/ticketModel');

async function addTicket(req, res){
    try{
        const newTicket = new Ticket(req.body)
        result = await newTicket.save()

      return  res.status(200).send({message: "user added successfully", result})
    }
    catch(error){
     return   res.status(500).send(error)
    }
   
};

async function getAllTicket(req,res){
    try {
        const result = await Ticket.find();
        
       return res.status(200).send(result);
    } catch (error) {
        
       return res.status(500).send(error);
    }
}

async function deleteTicket(req,res){
    try {
        const result = await Ticket.findByIdAndDelete(req.params.id);
        return res.status(200).send({message: "user deleted successfully", result});
    } catch (error) {
        return res.status(500).send(error);
    }
}

async function updateTicket(req,res){
    try {
        const result = await Ticket.findByIdAndUpdate(req.params.id, req.body, {new:true});
        return res.status(200).send({message: "user updated successfully", result});
    } catch (error) {
        return res.status(500).send(error);
    }
}



module.exports = {
    addTicket,
    getAllTicket,
    updateTicket,
    deleteTicket
}