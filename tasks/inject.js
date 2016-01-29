(function (module) {
    'use strict';

    var gulp = require('gulp'),
        inject = require('gulp-inject'),
        angularFilesort = require('gulp-angular-filesort'),
        bowerFiles = require('main-bower-files'),
        argv = require('yargs').argv;

    module.exports = function () {
        var target = gulp.src('./client/index.html');
        var sources = gulp.src([argv.dev === true ? './client/app/**/*.js' : './client/dist/*.js'])
            .pipe(angularFilesort());

        return target.pipe(inject(sources, {ignorePath: 'client/'}))
            .pipe(inject(gulp.src(bowerFiles(), {read: false}), {ignorePath: 'client/', name: 'bower'}))
            .pipe(inject(gulp.src('./client/dist/*.css'), {ignorePath: 'client/'}))
            .pipe(gulp.dest('./client'));
    };
}(module));
