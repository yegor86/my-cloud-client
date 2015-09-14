var express = require('express');
var path = require('path');

var router = express.Router();

router.get('/:name', function(req, res) {
    res.sendFile(path.join(__dirname + '../../../client/index.html'));
});

require('./index')(router);
require('./about')(router);

module.exports = router;