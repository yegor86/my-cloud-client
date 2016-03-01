(function(module) {
    "use strict";

    var gulp = require('gulp'),
        uglify = require('gulp-uglify'),
        concat = require('gulp-concat'),
        ngAnnotate = require('gulp-ng-annotate');

    module.exports = function() {
        var sources = gulp.src([
            './client/app/app.module.js',
            './client/app/**/*.js']);

        return sources.pipe(concat('all.js'))
            .pipe(ngAnnotate())
            .pipe(uglify())
            .pipe(gulp.dest('./client/dist'));
    };
}(module));
