const mongoose=require('mongoose'),Schema=mongoose.Schema;
//Defining the Schema
const userSchema=new Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: { type: String, required: true }
})
//Creating a model
const User=mongoose.model('User',userSchema)
module.exports={User};