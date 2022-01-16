const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const mongoose = require('mongoose');

// connect to mongodb
mongoose.connect('mongodb+srv://admin:fernis12@cluster0.afktq.mongodb.net/YelpCamp?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error: '));
db.once('open', () => {
    console.log('Database connected');
});

const app = express();

// set views directory
app.set('views', path.join(__dirname, 'views'));
// set views engine
app.set('view engine', 'ejs');

// use method override middleware globally
// lets us use http verbs we normally wouldn't be able to use
app.use(methodOverride('_method'));
// use bodyparser globally
// lets us parse incoming req.body as json
app.use(bodyParser.urlencoded({extended: true}));

const homeRouter = require('./controllers/home.js'); // home router
const campgroundRouter = require('./controllers/campground.js'); // campground router

// use router middleware for home
app.use('/', homeRouter);
app.use('/campgrounds', campgroundRouter);

// start server on port 3000
app.listen(process.env.PORT || 3000, () => {
    console.log('Server listening');
});
