(function (angular) {
    "use strict";

    var module = angular.module('myCloudDriveApp');

    function HomeCtrl($document, $scope) {
        // Set a default sort type
        $scope.sortType = 'name';
    }

    module.controller('HomeCtrl', HomeCtrl);
}(angular));