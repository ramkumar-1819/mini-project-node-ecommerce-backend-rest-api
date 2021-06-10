const {Product}=require('../Model/product');
const express=require('express');
const router=express.Router();
const ObjectId=require('mongoose').Types.ObjectId;

//GET method
router.get('/products',(req,res)=>{
      Product.find((err,docs)=>{
          if(err){
              res.status(500).send({Error:err})
          }
          else{
              res.send(docs)
          }
      })
})
//GET by ID
router.get('/products/:id',(req,res)=>{
    console.log("Getting")
    if(!ObjectId.isValid(req.params.id)){
        res.status(400).send({errorMessage:"Invalid Id"})
    }
    Product.findById(req.params.id,(err,docs)=>{
        if(err){
            res.status(500)
        }
        else{
            res.send(docs)
        }
    })
})
//POST
router.post('/products',(req,res)=>{
    console.log("Posting")
    const newProduct=new Product(req.body);
    newProduct.save((err,docs)=>{
        if(err){
            res.status(500).send({error:"Problem in Posting"})
        }
        else{
            res.send(docs)
        }
    })
})
//PATCH
router.patch('/products/:id',(req,res)=>{
    if(!ObjectId.isValid(req.params.id)){
        res.status(400).send({errorMessage:"Invalid Id"})
    }
    Product.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true},(err,docs)=>{
        if(err){
            if(err.name==="ValidationError"){
                res.send(404).send({Error:err.message})
            }
            else{
                res.status(500).send({Error:"Failed to Fetch"})
            }
        }
        res.send(docs)
    })
})

module.exports=router;