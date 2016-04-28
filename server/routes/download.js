(function (module) {
    "use strict";

    var http = require('http'),
        server = require('../config/server');

    module.exports = function (router) {

        function cleanUrl(url) {
            // Remove encoded slashes
            return url.replace(/%2F/g, '/');
        }

        router.get('/files/download(\/?[a-zA-Z0-9_-]?)*', function (clientRequest, clientResponse) {
            
            var options = {
                    host: server.host,
                    path: cleanUrl(clientRequest.url),
                    port: server.port,
                    method: 'GET'};

            var serverRequest = http.request(options, function (serverResponse) {
                var body = [];
                serverResponse.on('data', function (chunk) {
                    body.push(chunk);
                }).on('end', function () {
                    body = Buffer.concat(body).toString();
                    clientResponse.send(body);
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