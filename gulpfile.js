'use strict';

var gulp = require('gulp'),
    jshint = require('gulp-jshint'),
    install = require("gulp-install");

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

gulp.task('default', function () {
});

gulp.task('install', function () {
    gulp.start('hint');
    gulp.start('postcss');
    gulp.start('compress');
    gulp.start('inject');
});

gulp.task('hint', require('./tasks/hint'));

gulp.task('inject', require('./tasks/inject'));

gulp.task('unit', require('./tasks/unit'));

gulp.task('e2e', require('./tasks/e2e'));

gulp.task('compress', require('./tasks/minify'));

gulp.task('postcss', require('./tasks/postcss'));