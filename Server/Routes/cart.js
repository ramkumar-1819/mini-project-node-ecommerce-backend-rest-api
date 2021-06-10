const {Cart}=require('../Model/addCart');
const express=require('express');
const router=express.Router();

//POST
router.post('/cart',(req,res)=>{
     const newCart=new Cart(req.body);
     newCart.save((err,docs)=>{
         if(err){
             if(err.name==="ValidationError"){
                 return res.status(404).send({Error:err.message})
             }
             else{
                 return res.status(500).send(err)
             }
         }
         res.send(docs)
     })
})
//GET
router.get('/cart/:id',(req,res)=>{
    console.log(req.params.id)
    Cart.find({user_id:req.params.id}).populate('product').exec((err,val)=>{
        if(err){
            res.status(500).send({error:err})
        }
        res.send(val)
})
})
module.exports=router;