(function(module) {
    "use strict";

    var gulp = require('gulp'),
        uglify = require('gulp-uglify'),
        concat = require('gulp-concat');

    module.exports = function() {
        var sources = gulp.src([
            './client/app/app.js',
            './client/app/**/*.js']);

        return sources.pipe(concat('all.js'))
            .pipe(uglify())
            .pipe(gulp.dest('./client/dist'));
    };
}(module));
