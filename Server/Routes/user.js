const {User}=require('../Model/user');
const express=require('express');
const router=express.Router();
const ObjectId=require('mongoose').Types.ObjectId;
const { route } = require('./product');

//GET
router.get('/user',(req,res)=>{
    console.log("Getting")
    User.find((err,docs)=>{
        if(err){
            res.status(500).send({Error:"Error in fetching"})
        }
        res.send(docs)
    })
})
//GET by ID
router.get('/user/:id',(req,res)=>{
    if(!ObjectId.isValid(req.params.id)){
        res.status(400).send({errorMessage:"Invalid Id"})
    }
    User.findById(req.params.id,(err,docs)=>{
        if(err){
            console.log(err)
            res.send(500).send({Error:"Error in getting user"})
        }
        res.send(docs)
    })
})
//POST
router.post('/user',(req,res)=>{
    const newUser=new User(req.body);
    newUser.save((err,docs)=>{
        if(err){
            console.log(err)
            if(err.name==="ValidationError"){
                res.status(404).send({Error:err.message})
            }
            else{
                res.status(500).send({Error:"Failed to Fetch"})
            }
        }else{
            res.send(docs)
        }
        
    })
})
module.exports=router;