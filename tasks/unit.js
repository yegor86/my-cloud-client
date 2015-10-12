(function(module) {
    "use strict";

    var gulp = require('gulp'),
        Server = require('karma').Server,
        path = require('path');

    module.exports = function(done) {
        new Server({
            configFile: path.join(__dirname, '..', 'karma.conf.js'),
            singleRun: true
        }, done).start();
    };
}(module));
