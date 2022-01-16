const express = require('express');
const router = express.Router();
const Campground = require('../models/campground.js'); // Campground model


// /campgrounds/details/:id
router.get('/:id', async(req, res) => {
    const { id } = req.params;
    const campgrounds = await Campground.findById(id);
    res.render('campgrounds/details', {
        title: 'Details | YelpCamp',
        campgrounds
    })
});

router.put('/:id', async(req,res) => {
    const { id } = req.params;
    const campgrounds = await Campground.findByIdAndUpdate(id, {
        title: req.body.name,
        location: req.body.location,
        price: req.body.price
    });
    res.redirect(`/campgrounds/details/${campgrounds.id}`)
});



module.exports = router;