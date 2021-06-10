const express=require('express');
const bodyParser=require('body-parser');
const cors=require('cors');
//Making DB connection
const {mongoose}=require('../Connection/db')
//Getting Routes
const productDetails=require('../Routes/product');
const userDetails=require('../Routes/user');
const cartDetails=require('../Routes/cart');
//setting up the server
const app=express();
app.use(cors({origin:'*'}))
app.use(bodyParser.json());
app.use('/',productDetails);
app.use('/',userDetails);
app.use('/',cartDetails);
app.listen(4000,()=>console.log("Server Started at Port 4000"))