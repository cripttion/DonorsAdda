const mongoose = require('mongoose');

const donorDetailsSchema = new mongoose.Schema({
  trackingIds: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Tracking' }], // References to Tracking schema
  Address: String,
  Phone: String,
  Date: String,
  Name: String,
  Email:String,
  AdharCardNo: String,
  password:String,
  AnonymousDonor: Boolean,
});

const DonorDetails = mongoose.model('Donor', donorDetailsSchema);

module.exports = DonorDetails;
