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

router.put('/', async(req,res) => {
    const campgrounds = await Campground.create({
        title: req.body.name,
        price: req.body.price,
        location: req.body.location
    });
    campgrounds.save();
    res.redirect(`/campgrounds/details/${campgrounds.id}`);
})

module.exports = router;