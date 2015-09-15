'use strict';

var gulp = require('gulp');

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

gulp.task('default', function() {
    gulp.run('inject');
});

gulp.task('inject', require('./tasks/inject'));