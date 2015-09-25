'use strict';

var gulp = require('gulp'),
    jshint = require('gulp-jshint'),
    karma = require('karma').server,
    protractor = require('gulp-protractor').protractor;


process.env.NODE_ENV = process.env.NODE_ENV || 'development';

gulp.task('default', function() {
    gulp.start('jslint');
    gulp.start('inject');
});

gulp.task('hint', function() {
    return gulp.src(['./server/app.js',
        './server/routes/*.js',
        './server/bin/www'])
        .pipe(jshint())
        .pipe(jshint.reporter('default', { verbose: true }));
});

gulp.task('inject', require('./tasks/inject'));

gulp.task('unit', function(done) {
    karma.start({
        configFile: __dirname + '/karma.conf.js',
        singleRun: true
    }, done);
});

gulp.task('e2e', function(done) {
    var args = ['--baseUrl', 'http://127.0.0.1:9000'];
    gulp.src(["./client/tests/e2e/*.js"])
        .pipe(protractor({
            configFile: "./protractor.conf.js",
            args: args
        }))
        .on('error', function(e) { throw e; });
});