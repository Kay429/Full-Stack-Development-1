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
const tripsAddTrip = async (req, res) => {
    getUser(req, res,
        (req, res) => {
            Trip
                .create({
                    code: req.body.code,
                    name: req.body.name,
                    length: req.body.length,
                    start: req.body.start,
                    resort: req.body.resort,
                    perPerson: req.body.perPerson,
                    img: req.body.img,
                    desc: req.body.desc
                },
            (err, trip) => {
                if (err) {
                    return res
                        .status(400) // bad request
                        .json(err);
                } else {
                    return res
                        .status(201) // created
                        .json(trip);
                }
            });
        }
    );
}

// PUT: /trips/:tripCode - Adds a new Trip
const tripsUpdateTrip = async (req, res) => {
    getUser(req, res,
        (req, res) => {
            Trip
                .findOneAndUpdate({'code': req.params.tripCode },{
                    code: req.body.code,
                    name: req.body.name,
                    length: req.body.length,
                    start: req.body.start,
                    resort: req.body.resort,
                    perPerson: req.body.perPerson,
                    img: req.body.img,
                    desc: req.body.desc
                }, { new: true })
                    .then(trip => {
                        if (!trip) {
                            return res
                                .status(404)
                                    .send({
                                        message: "Trip not found with code" + req.params.tripCode
                                    });
                        }
                        res.send(trip);
                    }).catch(err => {
                        if (err.kind === 'ObjectId') {
                            return res
                                .status(404)
                                .send({
                                    message: "Trip not found with code" + req.params.tripCode
                                });
                        }
                        return res
                            .status(500) // server error
                            .json(err);
                    });
        }
    );
}

const tripsDeleteTrip = async(req, res) => {
    getUser(req, res,
        (req, res) => {
            Trip
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
    );
}
    
module.exports = {
    tripsList,
    findTripsByCode,
    tripsAddTrip,
    tripsUpdateTrip,
    tripsDeleteTrip
};