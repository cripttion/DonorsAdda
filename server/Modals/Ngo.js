const mongoose = require('mongoose');

const ngoDetailsSchema = new mongoose.Schema({
  trackingIds: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Tracking' }], // References to Tracking schema
  Address: String,
  Phone: String,
  Name: String,
  Email:String,
  AdharCardNo: String,
  password:String,
  NgoId:String
});

const NgoDetails = mongoose.model('Ngo', ngoDetailsSchema);

module.exports = NgoDetails;