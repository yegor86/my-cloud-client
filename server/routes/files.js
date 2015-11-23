(function(module) {
    "use strict";

    var http = require('http');

    module.exports = function(router) {
        router.get('/files(\/?[a-zA-Z0-9_-]?)*', function(clientRequest, clientResponse) {
            var options = {
                host: '127.0.0.1',
                path: clientRequest.url.replace(/%2F/g, '/').replace('/files', '/files/list/admin@mail.com'),
                port: '3030',
                method: 'GET'};

            var serverRequest = http.request(options, function(serverResponse) {
                serverResponse.on('data', function(chunk) {
                    var files = [],
                        data;

                    try {
                        data = JSON.parse(chunk);
                        data.forEach(function(item) {
                            files.push({
                                name: item.fileName || '',
                                type: item.extension || (item.folder === true ? 'dir' : ''),
                                size: item.fileSize || '',
                                modified: '',
                                sharedWith: []});
                        });
                    } catch(error) {
                        return console.error(error.message);
                    }
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