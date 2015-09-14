var express = require('express');
var router = express.Router();

router.get('/users', function(req, res) {
    console.log('users');
});

module.exports = router;