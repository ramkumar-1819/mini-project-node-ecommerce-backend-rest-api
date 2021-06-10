const mongoose=require('mongoose'),Schema=mongoose.Schema;
//Defining the Schema
const cartSchema=new Schema({
    user_id:{type:String,required:true},
    product: { type: Schema.Types.ObjectId, ref: 'Product', required: true },
    quantity: { type: Number, default: 1 }
})
//Creating a model
const Cart=mongoose.model('Cart',cartSchema)
module.exports={Cart};