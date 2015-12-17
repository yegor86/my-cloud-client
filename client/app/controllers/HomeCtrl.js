(function (angular) {
    "use strict";

    var module = angular.module('myCloudDriveApp');

    function HomeCtrl($scope) {
        // Set a default sort type
        $scope.sortType = 'name';
    }

    module.controller('HomeCtrl', HomeCtrl);
}(angular));