const mongoose = require('mongoose');

const trackingSchema = new mongoose.Schema({
  trackingId: String,
  DonorDetails: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Donor',
  },
  ReceiverDetails:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'Receivers'
  },
  NgoDetails:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'Ngo'
  },
  DonatedObjects: 
    {
      Name: String,
      Number: String,
      Images: [{
        imgname: String,
        imgdata: String
      }],
      Availability: Boolean,
      Category: String,
      UpiId:String,
      Amount: Number,
      Message:String,
      Date:String,
    },
  status:{
    received:String,
    Date:String,
  }
});

const Tracking = mongoose.model('Tracking', trackingSchema);

module.exports = Tracking;
