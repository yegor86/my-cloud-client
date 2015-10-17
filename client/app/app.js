(function() {
    "use strict";

    function valToString(val) {
        return val !== null ? val.toString() : val;
    }

    angular.module('myCloudDriveApp', [
        'ui.router',
        'ngResource'
    ]).config(function($stateProvider, $urlRouterProvider, $urlMatcherFactoryProvider, $locationProvider) {
        // Register a custom type with regexp to replace encoded slashes
        // https://github.com/angular-ui/ui-router/issues/1119#issuecomment-64696060
        $urlMatcherFactoryProvider.type('nonURIEncoded', {
            encode: valToString,
            decode: valToString,
            pattern: /(?:\/?[a-zA-Z0-9_-]?)*/
        });

        $stateProvider
            .state('home', {
                abstract: true,
                templateUrl: '../partials/home.html'
            })
            .state('home.files', {
                url: '/home{path:nonURIEncoded}',
                templateUrl: '../partials/home.files.html',
                controller: 'HomeCtrl'
            })
            .state('about', {
                url: '/about',
                templateUrl: '../partials/about.html',
                controller: 'AboutCtrl'
            });
        $urlRouterProvider.when('/', '/home');
        $locationProvider.html5Mode(true);
    });
}());