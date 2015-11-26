(function (angular) {
    "use strict";

    var module = angular.module('myCloudDriveApp');

    function UploadCtrl($document, $state, $stateParams, $scope, upload) {

        function successHandler(response) {
            $state.reload($state.current);
        }

        $scope.upload = function (files) {
            var path = $stateParams.path;
            // Remove a prefix slash of the path
            if (path[0] === '/') {
                path = path.slice(1, path.length);
            }
            upload({
                url: '/files/upload',
                method: 'POST',
                data: {
                    filePath: [path, files[0].name].join('/'),
                    email: 'admin@mail.com',
                    file: files[0]
                }
            }).then(successHandler);
        };

        $scope.closeModalWindow = function (event) {
            var modalHtmlElement = angular.element($document[0].getElementById('modal-upload'));

            $scope.$parent.closeModalWindow(modalHtmlElement);
        };

        // Handle an event that is dispatched in HomeCtrl
        $scope.$on('clickOnOverlay', function (event) {
            $scope.closeModalWindow(event);
        });
    }

    module.controller('UploadCtrl', UploadCtrl);
}(angular));