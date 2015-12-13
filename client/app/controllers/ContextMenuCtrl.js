(function (angular) {
    "use strict";

    var module = angular.module('myCloudDriveApp');

    function ContextMenuCtrl($scope) {

        $scope.actions = [];
    }

    module.controller('ContextMenuCtrl', ContextMenuCtrl);
}(angular));