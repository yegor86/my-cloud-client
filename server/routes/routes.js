var express = require('express');
var path = require('path');

var router = express.Router();

require('./home')(router);
require('./about')(router);
require('./files')(router);

module.exports = router;