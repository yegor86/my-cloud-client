(function (angular) {
    "use strict";

    var module = angular.module('myCloudDriveApp');

    function CreateFolderCtrl($document, $state, $stateParams, $scope, CreateFolder) {

        function successHandler(response) {
            $state.reload($state.current);
        }

        $scope.folderName = '';

        $scope.closeModalWindow = function (event) {
            var modalHtmlElement = angular.element($document[0].getElementById('modal-create-folder'));

            $scope.$parent.closeModalWindow(modalHtmlElement);
        };

        // Handle an event that is dispatched in HomeCtrl
        $scope.$on('clickOnOverlay', function (event) {
            $scope.closeModalWindow(event);
        });

        $scope.create = function (event) {
            var path = $stateParams.path;

            CreateFolder.send({
                path: (path.length > 0) ? [path, $scope.folderName].join('/') : $scope.folderName,
                email: "admin@mail.com"
            }).then(successHandler);

            $scope.closeModalWindow(event);
        };
    }

    module.controller('CreateFolderCtrl', CreateFolderCtrl);
}(angular));