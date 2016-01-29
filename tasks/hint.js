(function (module) {
    'use strict';

    var gulp = require('gulp'),
        jshint = require('gulp-jshint');

    module.exports = function () {
        return gulp.src(['./server/app.js',
                './server/routes/*.js',
                './server/bin/www',
                './client/app/**/*.js',
                './tasks/*.js'])
            .pipe(jshint())
            .pipe(jshint.reporter('default', { verbose: true }));
    };
}(module));
