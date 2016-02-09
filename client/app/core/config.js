(function (angular) {
    'use strict';

    var core = angular.module('app.core');

    core.config(configure);

    /* ngInject */
    function configure($urlMatcherFactoryProvider, $locationProvider) {
        // Register a custom type with regexp to replace encoded slashes
        // https://github.com/angular-ui/ui-router/issues/1119#issuecomment-64696060
        $urlMatcherFactoryProvider.type('nonURIEncoded', {
            encode: valToString,
            decode: valToString,
            pattern: /(?:\/?[a-zA-Z0-9_-\s]?)*/
        });

        $locationProvider.html5Mode(true);
    }

    function valToString(val) {
        return (val !== null && val !== undefined) ? val.toString() : val;
    }
}(angular));