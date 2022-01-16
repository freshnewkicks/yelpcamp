const express = require('express');
const router = express.Router();
const Campground = require('../models/campground.js');

router.get('/', async(req, res) => {
    res.render('add', {
        title: 'Add Camp | YelpCamp'
    });
});

module.exports = router;