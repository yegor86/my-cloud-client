(function (angular) {
    "use strict";

    var module = angular.module('myCloudDriveApp');

    function HomeCtrl($document, $scope) {
        // Set a default sort type
        $scope.sortType = 'name';

        // Set a default location text while files are loading
        $scope.location = 'Loading...';

        $scope.close = function (element) {
            if ((element instanceof jQuery || element instanceof Object) && element.hasClass('opened')) {
                return element.removeClass('opened');
            }
            return false;
        };

        $scope.open = function (element) {
            if (element instanceof jQuery || element instanceof Object) {
                return element.addClass('opened');
            }
            return false;
        };

        $scope.closeModalWindow = function (modalHtmlElement) {
            var modalOverlayHtmlElement = angular.element($document[0].getElementById('modal-overlay'));

            $scope.close(modalOverlayHtmlElement);
            $scope.close(modalHtmlElement);
        };

        // Dispatch a 'clickOnOverlay' event to child scopes. This is required to
        // close the modal window that is opened at the moment.
        $scope.clickOnOverlay = function () {
            $scope.$broadcast('clickOnOverlay');
        };
    }

    module.controller('HomeCtrl', HomeCtrl);
}(angular));