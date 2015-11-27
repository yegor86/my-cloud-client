(function (module) {
    "use strict";

    var httpProxy = require('http-proxy');

    module.exports = function (router) {
        router.post('/files/createfolder', function (clientRequest, clientResponse) {
            var proxy = httpProxy.createProxyServer();

            proxy.web(clientRequest, clientResponse, {target: 'http://127.0.0.1:3030'});
        });
        return router;
    };
}(module));