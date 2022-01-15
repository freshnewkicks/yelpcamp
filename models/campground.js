const mongoose = require('mongoose'); //mongoose
const Schema = mongoose.Schema; // mongoose.schema shortcut

//make schema for campground
const CampgroundSchema = new Schema({
    title: String,
    price: String,
    description: String,
    location: String
});

// export our schema
// by compiling the Model:
module.exports = mongoose.model('Campground', CampgroundSchema);