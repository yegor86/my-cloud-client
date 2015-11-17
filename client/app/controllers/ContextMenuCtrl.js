(function(angular) {
    "use strict";

    var module = angular.module('myCloudDriveApp');

    function ContextMenuCtrl($document, $scope) {
        $scope.actions = [];

        $scope.click = function(action) {
            if (action.name === "upload") {
                var modalHtmlElement = angular.element($document[0].getElementById('modal')),
                    modalOverlayHtmlElement = angular.element($document[0].getElementById('modal-overlay'));

                open(modalHtmlElement);
                open(modalOverlayHtmlElement);
            }
        };

        function open(element) {
            if (element instanceof jQuery || element instanceof Object) {
                return element.addClass('opened');
            }
            return false;
        }
    }

    module.controller('ContextMenuCtrl', ContextMenuCtrl);
}(angular));