var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
    console.log('index');

    res.json({
        'msg': 'success!'
    });
});

module.exports = router;
