(function (angular) {
    "use strict";

    var module = angular.module('myCloudDriveApp');

    module.directive('upload', function ($document) {
        return {
            restrict: "A",
            link: function ($scope, $element) {
                var uploadInputHtmlElement = $('#upload-input');

                $element.bind('click', function (event) {
                    uploadInputHtmlElement.trigger('click');
                });

                uploadInputHtmlElement.bind('change', function (event) {
                    var file = event.target.files[0],
                        modalUploadScope = angular.element($document[0].getElementById('modal-upload')).scope(),
                        modalUploadProgressbarScope =
                            angular
                                .element($document[0].getElementById('modal-upload-progressbar'))
                                .scope();

                    modalUploadScope.close(event);

                    modalUploadProgressbarScope.fileName = file.name;

                    modalUploadProgressbarScope.open();

                    $scope.modalUploadProgressbarScope = modalUploadProgressbarScope;
                    $scope.upload(file);
                });
            }
        };
    });
}(angular));
