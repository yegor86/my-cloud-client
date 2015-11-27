(function(module) {
    "use strict";

    var gulp = require('gulp'),
        inject = require('gulp-inject'),
        bowerFiles = require('main-bower-files'),
        argv = require('yargs').argv;

    module.exports = function() {
        var target = gulp.src('./client/index.html');
        var sources = gulp.src([
            './client/dist/*.css',
            argv.dev === true ? './client/app/**' : './client/dist/*.js'
        ], {read: false});

        return target.pipe(inject(sources, {ignorePath: 'client/'}))
            .pipe(inject(gulp.src(bowerFiles(), {read: false}), {ignorePath: 'client/', name: 'bower'}))
            .pipe(gulp.dest('./client'));
    };
}(module));
