'use strict';

var gulp = require('gulp');
var inject = require('gulp-inject');

module.exports = function() {
    var target = gulp.src('./client/index.html');
    var sources = gulp.src([
        './client/styles/css/*.css',
        './client/**/*.min.js',
        './client/bower_components/angular-resource/angular-resource.js',
        './client/app/app.js',
        './client/app/controllers/*.js'], {read: false});

    return target.pipe(inject(sources, {ignorePath: 'client/'}))
        .pipe(gulp.dest('./client'));
};
