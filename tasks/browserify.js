(function (module) {
    'use strict';

    var gulp = require('gulp'),
        browserify = require('browserify'),
        source = require('vinyl-source-stream');

    module.exports = function () {
        return browserify('./client/app/app.module.js')
            .bundle()
            .pipe(source('bundle.js'))
            .pipe(gulp.dest('./client/dist/'));
    };
}(module));
