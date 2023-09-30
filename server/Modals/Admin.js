// Name
//Email
//Name
//password
//AdminId
const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
    Name:{
        type:String,
        required:true,

    },
    Email:{
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