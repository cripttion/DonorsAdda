const express = require('express');
const app = express();
const multer = require('multer');

app.use(express.json());

const connectDB = require('./db'); // Import the database connection
const apiRoutes = require('./routes/apiRoutes'); // Import the route definitions
connectDB(); // Call the function to establish the database connection

app.use('/', apiRoutes); // Use the route definitions

app.listen(5000, () => {
  console.log('Server started on port 5000');
});
