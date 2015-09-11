var express = require('express');
var router = express.Router();

router.post('/', function(req, res) {
    console.log('users');

    res.send('respond with a resource');
});

module.exports = router;