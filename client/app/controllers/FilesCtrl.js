(function (angular) {
    "use strict";

    var module = angular.module('myCloudDriveApp');

    function FilesCtrl($scope, $state, $stateParams, Files) {

        function errorHandler(error) {
            $state.transitionTo('error');
        }

        function successHandler(response) {
        }

        $scope.items = Files.query({path: $stateParams.path || ""}, successHandler, errorHandler);

        $scope.clickOnItem = function (item) {
            if (item.type === 'dir') {
                // Remove a slash in the end of the path to avoid double slashes after concatenation
                if ($stateParams.path[$stateParams.path.length - 1] === '/') {
                    $stateParams.path = $stateParams.path.slice(0, -1);
                }

                $state.transitionTo(
                    $state.current,
                    {path: [$stateParams.path, item.name].join("/")},
                    {reload: true});
            }
        };
    }

    module.controller('FilesCtrl', FilesCtrl);
}(angular));