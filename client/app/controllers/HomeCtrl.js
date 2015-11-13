(function(angular) {
    "use strict";

    var module = angular.module('myCloudDriveApp');

    function HomeCtrl($scope, $state, $stateParams, FileManager) {

        function errorHandler(error) {
            $state.go('error');
        }

        $scope.items = FileManager.query({path: $stateParams.path || ""}, errorHandler);

        $scope.clickOnItem = function(item) {
            if (item.type === 'dir') {
                $state.transitionTo(
                    $state.current,
                    {path: [$stateParams.path, item.name].join("/")},
                    {reload: true});
            }
        };
    }

    module.controller('HomeCtrl', HomeCtrl);
}(angular));