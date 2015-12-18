(function (module) {
    "use strict";

    var http = require('http'),
        server = require('../config/server');

    module.exports = function (router) {

        function cleanUrl(url) {
            // Remove encoded slashes
            return url.replace(/%2F/g, '/');
        }

        router.get('/files/list(\/?[a-zA-Z0-9_-]?)*', function (clientRequest, clientResponse) {

            var options = {
                    host: server.host,
                    path: cleanUrl(clientRequest.url).replace('/files/list', '/files/list/admin@mail.com'),
                    port: server.port,
                    method: 'GET'};

            var serverRequest = http.request(options, function (serverResponse) {
                serverResponse.on('data', function (chunk) {
                    clientResponse.send(chunk);
                });
            });
            serverRequest.on('error', function (error) {
                clientResponse.statusCode = 500;
                clientResponse.json([{hasError: true, errorMessage: error.message, errorCode: error.code}]);
            });
            serverRequest.end();
        });
        return router;
    };
}(module));