(function(angular) {
    "use strict";

    var module = angular.module('myCloudDriveApp');

    function IndexCtrl($scope, FileNavigator) {
        $scope.items = FileNavigator.query();
        $scope.sortType = 'name';
        $scope.sortReverse = false;
    }

    module.controller('IndexCtrl', IndexCtrl);
}(angular));