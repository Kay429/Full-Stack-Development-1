const mongoose = require('mongoose');
const Trip = require('../models/travlr'); // Register model
const Model = mongoose.model('trips');

// GET: /trips - lists all the trips
// Regardless of outcome, response must include HTML status code
// and JSON message to the requesting client
const tripsList = async(req, res) => {
    const q = await Model
        .find({}) // No filter, return all records
        .exec();

        // Show query results
        //console.log(q);

    if(!q)
    { // Database returned no data
        return res
            .status(404)
            .json(err);
    } else { // Return trip list
        return res
            .status(200)
            .json(q);
    }
};

const findTripsByCode = async(req, res) => {
    const q = await Model
        .find({'code' : req.params.tripCode}) // Return a single record
        .exec();

    if(!q)
        { // Database returned no data
            return res
                .status(404)
                .json(err);
        } else { // Return trip list
            return res
                .status(200)
                .json(q);
        }
};

module.exports = {
    tripsList,
    findTripsByCode
};