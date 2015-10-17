(function(angular) {
    "use strict";

    var module = angular.module('myCloudDriveApp');

    function HomeCtrl($scope, $state, $stateParams, FileManager) {
        $scope.items = FileManager.query({path: $stateParams.path || ""});

        $scope.clickOnItem = function(item) {
            if (item.type == 'dir') {
                $state.transitionTo($state.current, {path: $stateParams.path + '/' + item.name}, {
                    reload: true
                });
            }
        };
    }

    module.controller('HomeCtrl', HomeCtrl);
}(angular));