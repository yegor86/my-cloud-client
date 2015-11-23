(function(angular) {
    "use strict";

    var module = angular.module('myCloudDriveApp');

    function UploadCtrl($document, $state, $scope, upload, FileManager) {
        $scope.close = function() {
            var modalHtmlElement = angular.element($document[0].getElementById('modal')),
                modalOverlayHtmlElement = angular.element($document[0].getElementById('modal-overlay'));

            close(modalHtmlElement);
            close(modalOverlayHtmlElement);
        };

        function successHandler(response) {
            $state.reload($state.current);
        }

        $scope.upload = function(files) {
            upload({
                url: FileManager.upload.path,
                method: FileManager.upload.method,
                data: {
                    filePath: files[0].name,
                    email: 'admin@mail.com',
                    file: files[0]
                }
            }).then(successHandler);
        };

        function close(element) {
            if (element instanceof jQuery || element instanceof Object) {
                return element.removeClass('opened');
            }
            return false;
        }
    }

    module.controller('UploadCtrl', UploadCtrl);
}(angular));