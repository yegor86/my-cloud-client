'use strict';

var app = angular.module('myCloudDriveApp', []);

angular.module('myCloudDriveApp')
    .controller('IndexCtrl', function ($scope, $http) {
        $scope.greeting = 'Hello!';
    });