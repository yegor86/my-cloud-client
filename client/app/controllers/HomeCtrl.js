(function (angular) {
    "use strict";

    var module = angular.module('myCloudDriveApp');

    function HomeCtrl($scope) {
        // Set a default sort type
        $scope.sortType = 'name';

        $scope.sortReverse = true;

        $scope.userEmail = 'admin@mail.com';
    }

    module.controller('HomeCtrl', HomeCtrl);
}(angular));