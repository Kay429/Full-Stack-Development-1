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

// POST: /trips - Adds new trip
const tripsAddTrip = async(req, res) => {
    const newTrip = new Trip({
        code: req.body.code,
        name: req.body.name,
        length: req.body.length,
        start: req.body.start,
        resort: req.body.resort,
        perPerson: req.body.perPerson,
        img: req.body.img,
        desc: req.body.desc,
    });

    const q = await newTrip.save();

    if(!q)
        { // Database returned no data
            return res
                .status(400)
                .json(err);
        } else { // Return new trip
            return res
                .status(201)
                .json(q);
        }
};

// PUT: /trips/:tripCode - Adds a new Trip
const tripsUpdateTrip = async(req, res) => {
    // Uncomment for debugging
    console.log(req.params);
    console.log(req.body);
    const q = await Model
    .findOneAndUpdate(
        {'code': req.params.tripCode },
        {
            code: req.body.code,
            name: req.body.name,
            length: req.body.length,
            start: req.body.start,
            resort: req.body.resort,
            perPerson: req.body.perPerson,
            img: req.body.img,
            desc: req.body.desc
        }
    )
    .exec();

    if(!q)
    { // Database returned no data
        return res
            .status(400)
            .json(err);
    } else { // Return resulting updated trip
        return res
            .status(201)
            .json(q);
    } 
};

const tripsDeleteTrip = async(req, res) => {
    const q = await Model
    .deleteOne({'code' : req.params.tripCode})
    .exec();

    if(!q)
        { // Database returned no data
            return res
                .status(400)
                .json(err);
        } else { // Return resulting deleted trip
            return res
                .status(201)
                .json(q);
        } 
}
    
module.exports = {
    tripsList,
    findTripsByCode,
    tripsAddTrip,
    tripsUpdateTrip,
    tripsDeleteTrip
};