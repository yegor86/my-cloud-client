(function (angular) {
    'use strict';

    angular
        .module('myCloudDriveApp')
        .directive('mccUpload', upload);

    function upload($document) {
        return {
            link: link,
            restrict: "A"
        };

        function link(scope, element) {
            var uploadInputHtmlElement = $('#upload-input');

            element.bind('click', function (event) {
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

                scope.modalUploadProgressbarScope = modalUploadProgressbarScope;
                scope.upload(file);
            });
        }
    }

}(angular));
