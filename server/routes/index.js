(function() {
    "use strict";

    module.exports = function(router) {
        router.get('/', function(req, res) {
            res.send('im the home page!');
        });
        return router;
    };
}());
