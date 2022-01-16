const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const mongoose = require('mongoose');
const app = express();

// use method override middleware globally
// lets us use http verbs we normally wouldn't be able to use
app.use(methodOverride('_method'));

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


// set views directory
app.set('views', path.join(__dirname, 'views'));
// set views engine
app.set('view engine', 'ejs');

// use bodyparser globally
// lets us parse incoming req.body as json
app.use(bodyParser.urlencoded({extended: true}));

const homeRouter = require('./controllers/home.js'); // home router
const campgroundRouter = require('./controllers/campground.js'); // campground router
const campDetailsRouter = require('./controllers/details.js'); // campground details route
const campDetailsEditRouter = require('./controllers/edit.js');
const campAddRouter = require('./controllers/add.js');

// use router middleware for home
app.use('/', homeRouter);
app.use('/campgrounds', campgroundRouter); // goes to /campgrounds
app.use('/campgrounds/details', campDetailsRouter); // goes to /campgrounds/details/
app.use('/campgrounds/details/edit', campDetailsEditRouter); // goes to /campgrounds/details/edit
app.use('/campgrounds/add', campAddRouter); // goes to /campgrounds/add

// start server on port 3000
app.listen(process.env.PORT || 3000, () => {
    console.log('Server listening');
});
