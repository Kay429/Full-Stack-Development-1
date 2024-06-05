const express = require('express'); // Express app
const router = express.Router(); // Router logic

// Import controllers
const tripsController = require('../controllers/trips');

// Define route for trips endpoint
router
    .route('/trips')
    .get(tripsController.tripsList); // GET method routes tripList

// GET Method routes findTripsByCode with parameter
router
    .route('/trips/:tripCode')
    .get(tripsController.findTripsByCode); // GET method routes tripList

module.exports = router;