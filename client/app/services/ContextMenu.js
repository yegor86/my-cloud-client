(function(angular) {
    "use strict";

    var module = angular.module('myCloudDriveApp');

    function ContextMenu() {
        return {
            id: 'context-menu',
            marginBottom: 10
        };
    }

    module.factory('ContextMenu', ContextMenu);
}(angular));
