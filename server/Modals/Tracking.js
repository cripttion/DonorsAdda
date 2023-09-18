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
  DonatedObjects: 
    {
      Name: String,
      Number: String,
      Images: [String],
      Availability: Boolean,
      Category: String,
      Amount: Number,
      Date:String,
    },
  status:{
    received:String,
    Date:String,
  }
});

const Tracking = mongoose.model('Tracking', trackingSchema);

module.exports = Tracking;
