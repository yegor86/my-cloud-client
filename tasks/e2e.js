(function(module) {
    "use strict";

    var gulp = require('gulp'),
        protractor = require('gulp-protractor').protractor,
        args = ['--baseUrl', 'http://127.0.0.1:9000'];

    module.exports = function() {
        gulp.src(["./client/tests/e2e/*.js"])
            .pipe(protractor({
                configFile: "./protractor.conf.js",
                args: args
            }))
            .on('error', function(e) { throw e; });
    };
}(module));
