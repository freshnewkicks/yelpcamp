const mongoose = require('mongoose'); //mongoose
const Schema = mongoose.Schema; // mongoose.schema shortcut

//make schema for campground
const CampgroundSchema = new Schema({
    title: String,
    price: String,
    description: String,
    location: String
};

    


