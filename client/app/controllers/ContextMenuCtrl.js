(function (angular) {
    "use strict";

    var module = angular.module('myCloudDriveApp');

    function ContextMenuCtrl($document, $scope) {

        function open(element) {
            if (element instanceof jQuery || element instanceof Object) {
                return element.addClass('opened');
            }
            return false;
        }

        function openModalWindow(modalHtmlElement) {
            var modalOverlayHtmlElement = angular.element($document[0].getElementById('modal-overlay'));

            open(modalHtmlElement);
            open(modalOverlayHtmlElement);
        }

        $scope.actions = [];

        $scope.click = function (action) {
            switch (action.name) {
                case "upload":
                    openModalWindow(angular.element($document[0].getElementById('modal-upload')));
                    break;
                case "download":
                    openModalWindow(angular.element($document[0].getElementById('modal-download')));
                    break;
                case "new-folder":
                    openModalWindow(angular.element($document[0].getElementById('modal-create-folder')));
                    break;
            }
        };
    }

    module.controller('ContextMenuCtrl', ContextMenuCtrl);
}(angular));