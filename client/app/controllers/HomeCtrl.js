(function (angular) {
    "use strict";

    var module = angular.module('myCloudDriveApp');

    function HomeCtrl($document, $scope) {
        // Set a default sort type
        $scope.sortType = 'name';

        // Set a default location text while files are loading
        $scope.location = 'Loading...';
    }

    module.controller('HomeCtrl', HomeCtrl);
}(angular));