const mongoose = require('mongoose');
/**
 const { Schema } = mongoose; @ou const schema = mongoose.schema
 */
 const { Schema } = mongoose


//contact schema
const contactSchema = new Schema({
name:{
    type:String,
    required:true,
},
email:{
    type:String,
    required:true,
    unique:true,
},
phone: Number

})


//Creating a model& exports
module.exports= Contact = mongoose.model('contact', contactSchema);
