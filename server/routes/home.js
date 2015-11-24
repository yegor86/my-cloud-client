(function(module) {
    "use strict";

    var path = require('path');

    module.exports = function(router) {
        router.get('/home(\/?[a-zA-Z0-9_-]?)*', function(req, res) {
            res.sendFile(path.join(__dirname, '../../client/index.html'));
        });
        return router;
    };
}(module));
