(function(angular) {
    "use strict";

    var module = angular.module('myCloudDriveApp');

    function UploadCtrl($document, $scope) {
        $scope.close = function() {
            var modalHtmlElement = angular.element($document[0].getElementById('modal')),
                modalOverlayHtmlElement = angular.element($document[0].getElementById('modal-overlay'));

            close(modalHtmlElement);
            close(modalOverlayHtmlElement);
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