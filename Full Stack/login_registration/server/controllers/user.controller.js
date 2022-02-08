const { User } = require('../models/user.model');
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
const secret = process.env.FIRST_SECRET_KEY;

module.exports.register = async (req, res) => {
    const user = await User.findOne({ email: req.body.email });

    if (user === null) {
        User.create(req.body)
            .then(user => {
                const userToken = jwt.sign({
                    id: user._id
                }, process.env.FIRST_SECRET_KEY);

                res.cookie("usertoken", userToken, secret, {
                    httpOnly: true
                })
                    .json({
                        id: user._id,
                        firstName: user.firstName,
                        lastName: user.lastName,
                        email: user.email
                    });
            })
            .catch(err => res.status(400).json(err));
    }
    else {
        return res.status(400).json({ errors: { email: { message: "Email already registered" } } });
    }
}

module.exports.login = async (req, res) => {
    const user = await User.findOne({ email: req.body.email });

    if (user === null) {
        // email not found in users collection
        return res.sendStatus(400);
    }

    // if we made it this far, we found a user with this email address
    // let's compare the supplied password to the hashed password in the database
    const correctPassword = await bcrypt.compare(req.body.password, user.password);

    if (!correctPassword) {
        // password wasn't a match!
        return res.sendStatus(400);
    }

    // if we made it this far, the password was correct
    const userToken = jwt.sign({
        id: user._id
    }, process.env.FIRST_SECRET_KEY);

    // note that the response object allows chained calls to cookie and json
    res
        .cookie("usertoken", userToken, secret, {
            httpOnly: true
        })
        .json({ 
                id: user._id,
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email 
                });
}

module.exports.logout = (req, res) => {
    res.clearCookie('usertoken');
    res.sendStatus(200);
}

module.exports.getAll = (req, res) => {
    User.find({})
        .then(user => res.json(user))
        .catch(err => res.json(err));
}

module.exports.getOne = (req, res) => {
    User.findOne({ _id: req.params.id })
        .then(user => res.json(
            {id: user._id,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email }))
        .catch(err => res.json(err));
}