(function(module) {
    "use strict";

    var http = require('http'),
        httpProxy = require('http-proxy');

    module.exports = function(router) {
        router.post('/files/upload', function(clientRequest, clientResponse) {
            var proxy = httpProxy.createProxyServer();

            proxy.web(clientRequest, clientResponse, {target: 'http://127.0.0.1:3030'});
        });
        return router;
    };
}(module));