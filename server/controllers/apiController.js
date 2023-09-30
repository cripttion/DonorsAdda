const express = require('express');
const router = express.Router();
const uuid = require('uuid');
const multer = require('multer');
const Admin = require('../Modals/Admin')
const Tracking = require('../Modals/Tracking');
const Donor = require('../Modals/Donor');
const Receivers = require('../Modals/Receivers');
const Ngo = require('../Modals/Ngo');
const DonorDetails = require('../Modals/Donor');
const NgoDetails = require('../Modals/Ngo');
const ReceiverDetails = require('../Modals/Receivers');
const upload = multer({ storage: multer.memoryStorage() });

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

router.post('/registerNgo',async(req,res)=>{
  try {
     const{
      Address,
      Phone,
      Name,
      Email,
      AdharCardNo,
      password,
      NgoId
     } = req.body;

     const existingNgo = await Ngo.findOne({ Email }).exec();
     if (existingNgo) {
      return res.status(400).json({ error: 'You are already our memeber' });
    }
    const trackingId = [];
    const newNgo = new Ngo({
      trackingId,     
      Address,
      Phone,
      Name,
      Email,
      AdharCardNo,
      password,
      NgoId
    });
    await newNgo.save();
    res.status(201).json({ message: 'Your organization is registered ' });


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
      user = await Ngo.findOne({ Email }).exec();
    }
    else if(Role===''){
      user=await Admin.findOne({Email}).exec();
    }
    
    if(!user)
    {
      return res.status(400).json({ error:  `${Role} - User not found ` });
    }
    if (Password !== user.password) {
      return res.status(400).json({ error: 'Invalid password' });
    }
    // console.log(user);
    res.status(200).json({ UserData: user,message:'Login Succesfully' });
    
  }catch(error){
    res.status(500).json({message:"An error encountered while login"});
    console.log(error);
  }
})
router.post('/newdonation', upload.array('Images'), async (req, res) => {
  try {
    const { 
      Name,
      Number,
      Email,
      Availability,
      Category,
      UpiId,
      Amount,
      Message,
      Date,
      Role
    } = req.body;

  //  console.log(Role);
    // Find the donor by email
    let user;
    
    if(Role==='Donor'){
     user = await Donor.findOne({ Email }).exec();

    }
    else if(Role==='Receivers'){
      user = await Receivers.findOne({ Email }).exec();
  
    }
    else if(Role==='NGOs'){
      user = await Ngo.findOne({ Email }).exec();
  
    }
    else if(Role===''){
      user=await Admin.findOne({Email}).exec();
    }
    
    if(!user)
    {
      return res.status(400).json({ error:  `${Role} - User not found ` });
    }
  //  console.log(user);
    const donationIds = []; // To store the generated tracking IDs for each donation

   
      // Generating a TrackingID for each donation
      const trackingId = uuid.v4();
      
      // Creating a new Tracking document for each donation
      const tracking = new Tracking({
        trackingId: trackingId,
        DonorDetails: Role === 'Donor' ? user._id : null,
        ReceiverDetails: Role === 'Receivers' ? user._id : null,
        NgoDetails: Role === 'NGOs' ? user._id : null,
        DonatedObjects:{ 
        Name:Name,
        Number:Number,
        Images:req.files.map(file => ({
          imgname: file.originalname,
          imgdata: file.buffer.toString('base64'),
        })),
        Availability:Availability,
        Category:Category,
        UpiId:UpiId,
        Amount:Amount,
        Message:Message,
        Date:Date
      },
      status: {
        received: 'Pending',
        Date: Date,
      },
      });

      await tracking.save();

      // Add the tracking ID to the donor's trackingIds array for each donation
      user.trackingIds.push(tracking._id);
      donationIds.push(trackingId);
    

    await user.save();

    res.status(201).json({ donationIds, message: "Donation details updated" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while creating donation objects' });
  }
});
router.get('/userTrackingDetails',async(req,res)=>{
  try{
    const userTracking = await Donor.find()
  }catch(error)
  {

  }
})

  router.get('/allTrackingDetails', async (req, res) => {
    try {
      const allTrackingDetails = await Tracking.find().populate('DonorDetails').populate('ReceiverDetails');
      res.json(allTrackingDetails);
    } catch (error) {
      console.error('Error fetching tracking details:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });
router.get('/allcampignDetails',async(req,res)=>{
  try {
    const results = await Tracking.find({
      'DonatedObjects.Amount': { $gt: 0 } // Filter objects with Amount greater than 0
    })
    .populate('NgoDetails') // Populate NgoDetails with the entire Ngo document
    .select('trackingId DonatedObjects NgoDetails -_id'); // Select the fields you want to return

    res.json(results);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while fetching data' });
  }
})
module.exports = router;
