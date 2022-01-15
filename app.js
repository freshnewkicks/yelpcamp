const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const mongoose = require('mongoose');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(methodOverride('_method'));
app.use(bodyParser.urlencoded({extended: true}));

const indexRouter = require('./controllers/index.js');

app.use('/', indexRouter);

app.listen(process.env.PORT || 3000, () => {
    console.log('Server listening');
});
