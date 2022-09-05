var mongoose = require('mongoose');

let messageSchema = mongoose.Schema({
        title: String,
        content: String,
        dateExp: Date,
        read: Boolean,
        sender: String

});

let taskSchema = mongoose.Schema({
        name: String,
        category: String,
        owner: String,
        dateInsert: Date,
        dateDue: Date,
        dateCloture: Date
});

let userSchema = mongoose.Schema({
        firstName: String,
        lastName: String,
        email: String,
        password:String,
        age: Number,
        status: String,
        gender: String,
        dateInsert: Date,
        messages: [messageSchema],
        tasks: [taskSchema]
    
 });

 let userModel = mongoose.model("users" , userSchema)

 module.exports = userModel;