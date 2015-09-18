'use strict';

angular.module('myCloudDriveApp', [
    'ngRoute',
    'ngCookies',
    'ngResource'
]).config(function($routeProvider, $locationProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'views/index.html',
            controller: 'IndexCtrl'
        })
        .when('/about', {
            templateUrl: 'views/about.html',
            controller: 'AboutCtrl'
        })
        .otherwise({
            redirectTo: '/'
        });
    $locationProvider.html5Mode(true);
(true);
});
