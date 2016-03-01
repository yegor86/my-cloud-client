(function (module) {
    'use strict';

    var express = require('express');
    var logger = require('morgan');
    var cookieParser = require('cookie-parser');
    var bodyParser = require('body-parser');

    var app = express();

    app.use(logger('dev'));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(cookieParser());

    if (app.get('env') === 'development') {
        // This will change in production since we'll use the dist folder
        app.use(express.static('./client'));

        // Error Handling
        app.use(function (err, req, res, next) {
            res.status(err.status || 500);
            res.render('error', {
                message: err.message,
                error: err
            });
        });
    }

    if (app.get('env') === 'production') {
        // changes it to use the optimized version for production
        app.use(express.static('./dist'));

        // production error handler
        // no stacktraces leaked to user
        app.use(function (err, req, res, next) {
            res.status(err.status || 500);
            res.render('error', {
                message: err.message,
                error: {}
            });
        });
    }

    var routes = require('./routes');

    app.use('/', routes);

    module.exports = app;
}(module));
