const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const mongoose = require('mongoose');

app.use(methodOverride('_method'));
app.use(bodyParser.urlencoded({extended: true}));

const indexRouter = require('./routes/home.js');

app.use('/', indexRouter);

app.listen(process.env.PORT || 3000, () => {
    console.log('Server listening');
});
