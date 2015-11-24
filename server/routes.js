(function(module) {
    "use strict";

    var express = require('express'),
        router = express.Router();

    require('./routes/home')(router);
    require('./routes/about')(router);

    module.exports = router;
}(module));