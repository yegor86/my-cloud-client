(function(module) {
    "use strict";

    var gulp = require('gulp'),
        postcss = require('gulp-postcss'),
        autoprefixer = require('autoprefixer'),
        assets  = require('postcss-assets'),
        cssnano = require('cssnano'),
        concatCss = require('gulp-concat-css');

    module.exports = function() {
        var processors = [
            autoprefixer({browsers: ['last 2 version']}),
            assets({
                cachebuster: true,
                basePath: './client',
                loadPaths: ['assets/images/']
            }),
            cssnano()
        ];
        return gulp.src(['./client/assets/css/*.css', './client/app/**/*.css'])
            .pipe(concatCss('all.css'))
            .pipe(postcss(processors))
            .pipe(gulp.dest('./client/dist'));
    };
}(module));
