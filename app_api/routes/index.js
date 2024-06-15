const express = require('express'); // Express app
const router = express.Router(); // Router logic

// Import controllers
const tripsController = require('../controllers/trips');

// Define route for trips endpoint
router
    .route('/trips')
    .get(tripsController.tripsList) // GET method routes tripList
    .post(tripsController.tripsAddTrip); // POST method adds a trip

// GET Method routes findTripsByCode with parameter
router
    .route('/trips/:tripCode')
    .get(tripsController.findTripsByCode) // GET method routes tripList
    .put(tripsController.tripsUpdateTrip)
    .delete(tripsController.tripsDeleteTrip);

module.exports = router;