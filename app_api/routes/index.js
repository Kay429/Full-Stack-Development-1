const express = require('express'); // Express app
const router = express.Router(); // Router logic
const { expressjwt: jwt } = require('express-jwt');
const auth = jwt({
    secret: process.env.JWT_SECRET,
    algorithms: ['RS256'],
    userProperty: 'payload'
});

// Import controllers
const authController = require('../controllers/authentication');
const tripsController = require('../controllers/trips');

// Login router
router
    .route('/login')
    .post(authController.login);

// Register router
router
    .route('/register')
    .post(authController.register);

// Trips router
router
    .route('/trips')
    .get(tripsController.tripsList) // GET method routes tripList
    .post(auth, tripsController.tripsAddTrip); // POST method adds a trip

// Trips/:tripCode router
router
    .route('/trips/:tripCode')
    .get(tripsController.findTripsByCode) // GET method routes tripList
    .put(auth, tripsController.tripsUpdateTrip)
    .delete(auth, tripsController.tripsDeleteTrip);

module.exports = router;