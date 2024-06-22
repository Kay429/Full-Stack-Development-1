const passport = require('passport');
const mongoose = require('mongoose');
const User = mongoose.model('users');

const register = async(req, res) => {
    if (!req.body.name || !req.body.email || !req.body.password) {
        return res
        .status(400)
        .json({"message": "All fields required"});
    }
    const user = new User();
    user.name = req.body.name;
    user.email = req.body.email;
    user.setPassword(req.body.password);

    const q = await user.save();

    if(!q)
        { // Database returned no data
            return res
            .status(400)
            .json(err);
        } else { // Return new trip
            const token = user.generateJwt();
            return res
            .status(200)
            .json({token});
        }
};

const login = async(req, res) => {
    try {
        if (!req.body.email || !req.body.password) {
            return res
                .status(400)
                .json({"message": "All fields required"});
        }

        const user = await new Promise((resolve, reject) => { 
            passport.authenticate('local', (err, user, info) => {
                if (err) {
                    reject(err); // Reject promise
                } else {
                    resolve(user); // Resolve with user
                }
            })(req, res);
        });

        if (!user) {
            return res
                .status(401)
                .json({ message: 'Authentication failed '});
        }

        const token = user.generateJwt();
        res.status(200).json({token});
    } catch (error) {
        // Handle errors
        console.error("Login error: ", error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

module.exports = {
    register,
    login
};