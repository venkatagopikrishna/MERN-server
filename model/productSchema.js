const mongoose = require('mongoose');
const productSchema = mongoose.Schema({
   
    imageURL:{
        type:String,
        required:true,
    },price:{
        type:Number,
        required:true,
    },description:{
        type:String,
        required:true,
    }
}) //convert this into A MONGOOSE schema 
module.exports= mongoose.model('Product',productSchema)