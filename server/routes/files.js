(function (module) {
    "use strict";

    var http = require('http'),
        server = require('../config/server');

    module.exports = function (router) {

        function cleanUrl(url) {
            // Remove encoded slashes
            return url.replace(/%2F/g, '/');
        }

        router.get('/files(\/?[a-zA-Z0-9_-]?)*', function (clientRequest, clientResponse) {
            var options = {
                    host: server.host,
                    path: cleanUrl(clientRequest.url).replace('/files', '/files/list/admin@mail.com'),
                    port: server.port,
                    method: 'GET'};

            var serverRequest = http.request(options, function (serverResponse) {
                serverResponse.on('data', function (chunk) {
                    var files = [],
                        data;

                    try {
                        data = JSON.parse(chunk);
                        data.forEach(function(item) {
                            files.push({
                                name: item.fileName || '',
                                type: item.extension || (item.folder === true ? 'dir' : ''),
                                size: item.fileSize || '',
                                modified: item.updated || '',
                                sharedWith: []});
                        });
                    } catch(error) {
                        return console.error(error.message);
                    }
                    clientResponse.send(files);
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