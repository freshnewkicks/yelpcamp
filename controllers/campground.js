const express = require('express');
const router = express.Router();
const Campground = require('../models/campground.js'); // require Campground model


router.get('/', async(req,res) => {
    const campgrounds = await Campground.find({}); // get all campgrounds in DB
    res.render('campgrounds/campgrounds', {
        title: 'Campgrounds | YelpCamp',
        campgrounds // render all campgrounds from find({});
    });
});

module.exports = router;