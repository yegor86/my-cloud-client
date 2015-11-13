(function(module) {
    "use strict";

    var http = require('http');

    module.exports = function(router) {
        router.get('/files(\/?[a-zA-Z0-9_-]?)*', function(clientRequest, clientResponse) {
            var options = {
                host: '127.0.0.1',
                path: '/files',
                port: '3030',
                method: 'GET'};

            var serverRequest = http.request(options, function(serverResponse) {
                serverResponse.on('data', function(chunk) {
                    var files = [];

                    JSON.parse(chunk).forEach(function(item) {
                        files.push({
                            name: item.fileName || '',
                            type: 'text',
                            size: item.fileSize || '',
                            modified: '',
                            sharedWith: []});
                    });
                    clientResponse.send(files);
                });
            });
            serverRequest.on('error', function(error) {
                clientResponse.statusCode = 500;
                clientResponse.json([{hasError: true, errorMessage: error.message, errorCode: error.code}]);
            });
            serverRequest.end();
        });
        return router;
    };
}(module));