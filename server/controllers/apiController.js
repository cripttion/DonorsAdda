const express = require('express');
const router = express.Router();
const Admin = require('../Modals/Admin')
// Define API routes and their handlers
router.get('/', (req, res) => {
  res.json({ users: ['useraone', 'usertwo','userThrree','userFour'] });
});
router.post('/',async(req,res)=>{
    try{
        let{name,email,password,adminId} = req.body;
         const newAdmin = new Admin({name,email,password,adminId});
         await newAdmin.save();
         console.log("you are admin now");
         res.status(201).json(newAdmin);
         
    }catch(error){
        res.status(500).json({error:error.message});
    }
});

module.exports = router;
