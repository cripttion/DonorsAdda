// Name
//  -Phone 
//  -Email
//  -whatsapp
//  -Donations:[trackingId....]
//  -Address
const mongoose = require('mongoose');

const donorSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,

    },
    phone:{
        type:String,
        required:true,
        
    },
    email:{
        type:String,
        
    },
    whatsapp:{
        type:String,
        
    },
    donationHistory:[{
        type:String,
    }],
    adress:{
        type:String,
        required:true,
        
    }
});
module.exports = mongoose.model('Donor',donorSchema);