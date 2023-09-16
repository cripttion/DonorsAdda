const express = require('express');
const router = express.Router();
const apiController = require('../controllers/apiController'); // Import the controller

// Define routes and associate with controllers
router.use('/api', apiController);
router.use('/addAdmin',apiController);
module.exports = router;
