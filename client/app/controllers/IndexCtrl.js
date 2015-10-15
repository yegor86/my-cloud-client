(function(angular) {
    "use strict";

    var module = angular.module('myCloudDriveApp');

    function IndexCtrl($scope, FileNavigator) {
        $scope.items = FileNavigator.query();
    }

    module.controller('IndexCtrl', IndexCtrl);
}(angular));