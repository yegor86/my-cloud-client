(function (angular) {
    "use strict";

    var module = angular.module('myCloudDriveApp');

    function HomeCtrl($document, $scope) {

        function close(element) {
            if ((element instanceof jQuery || element instanceof Object) && element.hasClass('opened')) {
                return element.removeClass('opened');
            }
            return false;
        }

        $scope.closeModalWindow = function (modalHtmlElement) {
            var modalOverlayHtmlElement = angular.element($document[0].getElementById('modal-overlay'));

            close(modalOverlayHtmlElement);
            close(modalHtmlElement);
        };

        // Dispatch a 'clickOnOverlay' event to child scopes. This is required to
        // close the modal window that is opened at the moment.
        $scope.clickOnOverlay = function () {
            $scope.$broadcast('clickOnOverlay');
        };
    }

    module.controller('HomeCtrl', HomeCtrl);
}(angular));