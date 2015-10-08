(function() {
    "use strict";

    angular.module('myCloudDriveApp', [
        'ngRoute',
        'ngCookies',
        'ngResource'
    ]).config(function($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
                templateUrl: '../partials/index.html',
                controller: 'IndexCtrl'
            })
            .when('/about', {
                templateUrl: '../partials/about.html',
                controller: 'AboutCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
        $locationProvider.html5Mode(true);
    });
}());