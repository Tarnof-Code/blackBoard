var mongoose = require('mongoose');

let articleSchema = mongoose.Schema({
    title: String, 
    description: String, 
    price: Number,
    stock: Number,
    weight: Number,
    img: String,
    
 });

 let articleModel = mongoose.model("articles" , articleSchema)

 module.exports = articleModel;