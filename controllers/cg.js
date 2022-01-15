const express = require('express');
const router = express.Router();
const Campground = require('../models/campground.js'); // require Campground model


router.get('/', async(req, res) => {
    // create new campground document
    const camp = new Campground({
        title: 'My backyard',
        description: 'Familiar location...',
        price: 0.00
    });
    await camp.save();
    res.send(camp);
});

module.exports = router;