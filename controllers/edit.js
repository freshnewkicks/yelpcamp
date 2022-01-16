const express = require('express');
const router = express.Router();
const Campground = require('../models/campground.js');

router.get('/:id', async(req,res) => {
    const { id } = req.params;
    const campgrounds = await Campground.findById(id);
    res.render('edit', {
        title: 'Edit Details | YelpCamp',
        campgrounds
    })
});

module.exports = router;