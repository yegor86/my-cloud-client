(function(angular) {
    "use strict";

    var module = angular.module('myCloudDriveApp');

    function UploadCtrl($document, $state, $stateParams, $scope, upload, FileManager) {
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
            var uploadPath = $stateParams.path;
            // Remove a prefix slash of the path
            if (uploadPath[0] === '/') {
                uploadPath = uploadPath.slice(1, uploadPath.length);
            }
            upload({
                url: FileManager.upload.path,
                method: FileManager.upload.method,
                data: {
                    filePath: [uploadPath, files[0].name].join('/'),
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