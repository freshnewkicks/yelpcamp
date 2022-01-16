const express = require('express');
const router = express.Router();
const Campground = require('../models/campground.js');

router.delete('/', async(req,res) => {
    const id = req.body.cg_id;
    const campgrounds = await Campground.findById(id);
    campgrounds.delete();
    res.redirect(`/campgrounds/`);
});



module.exports = router;