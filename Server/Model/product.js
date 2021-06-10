const mongoose=require('mongoose'),Schema=mongoose.Schema;
//Defining the Schema
const productSchema=new Schema({
        name: { type: String, required: true },
        price: { type: Number, required: true },
        productImage: { type: String },
        description:{type:String}
})
//Creating a model
const Product=mongoose.model('Product',productSchema)
module.exports={Product};