(function(module) {
    "use strict";

    var http = require('http'),
        querystring = require('querystring'),
        FormData = require('form-data');

    module.exports = function(router) {
        router.post('/files%2Fupload', function(clientRequest, clientResponse) {
            var options = {
                    host: '127.0.0.1',
                    path: '/files/upload',
                    port: '3030',
                    method: 'POST',
                    header: {'Content-Type': 'application/x-www-form-urlencoded'}};

            var serverRequest = http.request(options, function(serverResponse) {
                console.log(serverResponse.statusMessage);
            });

            var formData = new FormData();
            formData.append('file', clientRequest);
            serverRequest.write(querystring.stringify(formData));

            serverRequest.on('error', function(error) {
                clientResponse.statusCode = 500;
                clientResponse.json([{hasError: true, errorMessage: error.message, errorCode: error.code}]);
            });
            serverRequest.end();
        });
        return router;
    };
}(module));