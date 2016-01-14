(function (angular) {
    "use strict";

    var module = angular.module('myCloudDriveApp');

    function CreateFolderCtrl($state, $stateParams, $scope, CreateFolder) {

        function successHandler(response) {
            $state.reload($state.current);
        }

        $scope.folderName = '';

        $scope.create = function (event) {
            var path = $stateParams.path;

            CreateFolder.send({
                path: [path, $scope.folderName].join('/'),
                email: $scope.userEmail
            }).then(successHandler);

            $scope.close(event);
        };
    }

    module.controller('CreateFolderCtrl', CreateFolderCtrl);
}(angular));