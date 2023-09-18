const mongoose = require('mongoose');

const receiverSchema = new mongoose.Schema({
  trackingIds: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Tracking' }], // References to Tracking schema
  Address: String,
  Phone: String,
  Name: String,
  Email:String,
  AdharCardNo:String,
  password:String,
  Age:String,
});

const ReceiverDetails = mongoose.model('Receivers', receiverSchema);

module.exports = ReceiverDetails;
