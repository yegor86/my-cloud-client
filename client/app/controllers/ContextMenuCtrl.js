(function(angular) {
    "use strict";

    var module = angular.module('myCloudDriveApp');

    function ContextMenuCtrl($scope, ContextMenu) {
        $scope.actions = ContextMenu.getContextMenuActions('file');
    }

    module.controller('ContextMenuCtrl', ContextMenuCtrl);
}(angular));