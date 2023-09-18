const express = require('express');
const router = express.Router();
const uuid = require('uuid');
const Admin = require('../Modals/Admin')
const Tracking = require('../Modals/Tracking');
const Donor = require('../Modals/Donor');
const Receivers = require('../Modals/Receivers');
// Define API routes and their handlers
router.get('/', (req, res) => {
  res.json({ users: ['useraone', 'usertwo','userThrree','userFour'] });
});
router.post('/',async(req,res)=>{
    try {
        // Extract donor registration data from the request body
        const {
          Address,
          Phone,
          Date,
          Name,
          Email,
          AdharCardNo,
          password,
          AnonymousDonor,
        } = req.body;
    
        // Check if the email is already registered
        const existingDonor = await Donor.findOne({ Email }).exec();
        if (existingDonor) {
          return res.status(400).json({ error: ' Donor Email is already registered' });
        }
    
        // Set a default value for trackingIds (empty array)
        const trackingIds = [];
    
        // Create a new donor document with the registration data
        const newDonor = new Donor({
          trackingIds, // Set the default value
          Address,
          Phone,
          Date,
          Name,
          Email,
          AdharCardNo,
          password, // Remember to hash and salt the password before saving (see previous answers)
          AnonymousDonor,
        });
    
        // Save the donor document to the database
        await newDonor.save();
    
        res.status(201).json({ message: 'Donor registered successfully' });
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while registering the donor' });
      }
});

router.post('/receiver',async(req,res)=>{
  try {
     const{
      Address,
      Phone,
      Name,
      Email,
      AdharCardNo,
      password,
      Age
     } = req.body;

     const existingDonor = await Receivers.findOne({ Email }).exec();
     if (existingDonor) {
      return res.status(400).json({ error: 'You are already our memeber' });
    }
    const trackingId = [];
    const newReceiver = new Receivers({
      trackingId,     
      Address,
      Phone,
      Name,
      Email,
      AdharCardNo,
      password,
      Age
    });
    await newReceiver.save();
    res.status(201).json({ message: 'Lot\'s of Donations are waiting enjoy!' });


    } catch (error) {
     console.log(error);
     res.status(500).json({Error:"Someting went wrong while Registring"})
  }
});
router.post('/login',async(req,res)=>{
  try{
    const{Email,Password,Role} = req.body;
    let user;
    if(Role==='Donor'){
     user = await Donor.findOne({ Email }).exec();
    }
    else if(Role==='Receivers'){
      user = await Receivers.findOne({ Email }).exec();
    }
    else if(Role==='NGOs'){
      user = await Receivers.findOne({ Email }).exec();
    }
    else{
      user=await Admin.findOne({Email}).exec();
    }
    
    if(!user)
    {
      return res.status(400).json({ error:  `${Role} - User not found ` });
    }
    if (Password !== user.password) {
      return res.status(400).json({ error: 'Invalid password' });
    }
    console.log(user);
    res.status(200).json({ UserData: user,message:'Login Succesfully' });
    
  }catch(error){
    res.status(500).json({message:"An error encountered while login"});
    console.log(error);
  }
})
router.post('/newdonation', async (req, res) => {
    try {
      const { DonorEmail, DonatedObjects } = req.body;
      
      // Find the donor by email
      const donor = await Donor.findOne({ Email: DonorEmail }).exec();
  
      if (!donor) {
        return res.status(404).json({ error: 'Donor not found' });
      }
  
      const donationIds = []; // To store the generated tracking IDs for each donation
  
      for (const donatedObject of DonatedObjects) {
        // Generating a TrackingID for each donation
        const trackingId = uuid.v4();
        
        // Creating a new Tracking document for each donation
        const tracking = new Tracking({
          trackingId: trackingId,
          DonatedObjects: donatedObject,
        });
  
        await tracking.save();
  
        // Add the tracking ID to the donor's trackingIds array for each donation
        donor.trackingIds.push(tracking._id);
        donationIds.push(trackingId);
      }
  
      await donor.save();
  
      res.status(201).json({ donationIds, message: "Donation details updated" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'An error occurred while creating donation objects' });
    }
  });
  

module.exports = router;
