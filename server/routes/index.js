var express = require('express');
var router = express.Router();

router.post('/', function(req, res) {
    console.log('index');

    res.json({
        'msg': 'success!'
    });
});

module.exports = router;
