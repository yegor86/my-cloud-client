(function (angular) {
    "use strict";

    var module = angular.module('myCloudDriveApp');

    module.directive('upload', function ($document) {
        return {
            link: function ($scope, $element) {
                var uploadInputHtmlElement = $('#upload-input');

                $element.bind('click', function (event) {
                    uploadInputHtmlElement.trigger('click');
                });

                uploadInputHtmlElement.bind('change', function (event) {
                    var file = event.target.files[0],
                        uploadScope = angular.element($document[0].getElementById('modal-upload')).scope();

                    $scope.closeModalWindow(event);

                    uploadScope.progressbarModalHtmlElement = angular.element($document[0].getElementById('modal-upload-progressbar'));
                    uploadScope.progressbarModalOverlayHtmlElement = angular.element($document[0].getElementById('modal-overlay-progressbar'));
                    uploadScope.progressbarModalHtmlElement.scope().fileName = file.name;

                    $scope.open(uploadScope.progressbarModalOverlayHtmlElement);
                    $scope.open(uploadScope.progressbarModalHtmlElement);

                    $scope.upload(file);
                });
            }
        };
    });
}(angular));
