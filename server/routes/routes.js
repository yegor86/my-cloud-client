var express = require('express');
var path = require('path');

var router = express.Router();

require('./home')(router);
require('./about')(router);

module.exports = router;