const express = require('express');
const router = express.Router();

app.get('/', (req, res) => {
    res.send('Index page');
})

module.exports = router;