"use strict";

var gulp = require('gulp'),
    jshint = require('gulp-jshint'),
    install = require("gulp-install");

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

gulp.task('default', function() {
    gulp.start('hint');
    gulp.start('postcss');
    gulp.start('compress');
    gulp.start('inject');
});

gulp.task('hint', function() {
    return gulp.src(['./server/app.js',
        './server/routes/*.js',
        './server/bin/www',
        './client/app/**/*.js',
        './tasks/*.js'])
        .pipe(jshint())
        .pipe(jshint.reporter('default', { verbose: true }));
});

gulp.task('inject', require('./tasks/inject'));

gulp.task('unit', require('./tasks/unit'));

gulp.task('e2e', require('./tasks/e2e'));

gulp.task('compress', require('./tasks/minify'));

gulp.task('postcss', require('./tasks/postcss'));

gulp.task('install', function() {
    gulp.src(['./bower.json', './package.json'])
        .pipe(install());

    gulp.start('default');
});