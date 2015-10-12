'use strict';

var gulp = require('gulp'),
    jshint = require('gulp-jshint'),
    Server = require('karma').Server,
    protractor = require('gulp-protractor').protractor;


process.env.NODE_ENV = process.env.NODE_ENV || 'development';

gulp.task('default', function() {
    gulp.start('hint');
    gulp.start('inject');
});

gulp.task('hint', function() {
    return gulp.src(['./server/app.js',
        './server/routes/*.js',
        './server/bin/www',
        './client/app/**/*.js'])
        .pipe(jshint())
        .pipe(jshint.reporter('default', { verbose: true }));
});

gulp.task('inject', require('./tasks/inject'));

gulp.task('unit', function(done) {
    new Server({
        configFile: __dirname + '/karma.conf.js',
        singleRun: true
    }, done).start();
});

gulp.task('e2e', require('./tasks/e2e'));