(function (angular) {
    "use strict";

    var module = angular.module('myCloudDriveApp');

    function CreateFolderCtrl($document, $state, $stateParams, $scope, upload) {

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
            // Remove a prefix slash of the path
            if (path[0] === '/') {
                path = path.slice(1, path.length);
            }
            // @todo: Use FileManager to create a new folder
            upload({
                url: '/files/createfolder',
                method: 'POST',
                data: {
                    path: [path, $scope.folderName].join('/'),
                    email: "admin@mail.com"
                }
            }).then(successHandler);

            $scope.closeModalWindow(event);
        };
    }

    module.controller('CreateFolderCtrl', CreateFolderCtrl);
}(angular));