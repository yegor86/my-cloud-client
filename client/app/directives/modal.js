(function (angular) {
    "use strict";

    var module = angular.module('myCloudDriveApp');

    module.directive('modal', function ($document) {

        function close(element) {
            if ((element instanceof jQuery || element instanceof Object) && element.hasClass('opened')) {
                return element.removeClass('opened');
            }
            return false;
        }

        function open(element) {
            if (element instanceof jQuery || element instanceof Object) {
                return element.addClass('opened');
            }
            return false;
        }

        return {
            link: function ($scope, $element) {
                var modalOverlayHtmlElement = angular.element($document[0].getElementById('modal-overlay'));

                modalOverlayHtmlElement.bind('click', function (event) {
                    close(modalOverlayHtmlElement);
                    close($element);
                });
            }
        };
    });
}(angular));
