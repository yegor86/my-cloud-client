(function (angular) {
    'use strict';

    angular
        .module('myCloudDriveApp')
        .controller('ContextMenuController', ContextMenuController);

    function ContextMenuController() {
        var vm = this;
        vm.actions = [];
    }
}(angular));