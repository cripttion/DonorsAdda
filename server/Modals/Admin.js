// Name
//Email
//Name
//password
//AdminId
const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,

    },
    email:{
        type:String,
        required:true,
        
    },
    password:{
        type:String,
        
    },
    adminId:{
        type:String,
        
    }
  
});
module.exports = mongoose.model('Admin',adminSchema);