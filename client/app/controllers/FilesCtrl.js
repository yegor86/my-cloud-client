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
                $state.transitionTo(
                    $state.current,
                    {path: [$stateParams.path, item.name].join("/")},
                    {reload: true});
            }
        };
    }

    module.controller('FilesCtrl', FilesCtrl);
}(angular));