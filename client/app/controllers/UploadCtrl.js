(function (angular) {
    "use strict";

    var module = angular.module('myCloudDriveApp');

    function UploadCtrl($document, $state, $stateParams, $scope, Upload) {

        function successHandler(response) {
            $state.reload($state.current);

            $scope.close($scope.progressbarModalOverlayHtmlElement);
            $scope.close($scope.progressbarModalHtmlElement);
        }

        $scope.upload = function (file) {
            var path = $stateParams.path;

            Upload.send({
                filePath: [path, file.name].join('/'),
                email: 'admin@mail.com',
                file: file
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