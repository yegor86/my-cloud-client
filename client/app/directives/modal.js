(function (angular) {
    "use strict";

    var module = angular.module('myCloudDriveApp');

    module.directive('modal', function ($document) {

        var overlayHtmlElement;

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

        function isOpened(element) {
            return element.hasClass('opened');
        }

        return {
            restrict: 'E',
            controller: function ($scope, $element) {

                overlayHtmlElement = angular.element($document[0].getElementById('modal-overlay'));

                $scope.open = function (event) {
                    open(overlayHtmlElement);
                    open($element);
                };

                $scope.close = function (event) {
                    close(overlayHtmlElement);
                    close($element);
                };
            },
            link: function ($scope, $element) {
                overlayHtmlElement.bind('click', function (event) {
                    if (isOpened($element) && $element.hasClass('progressbar') === false) {
                        $scope.close(event);
                    }
                });

                // Don't trigger the context menu on overlay
                overlayHtmlElement.bind('contextmenu', function (event) {
                    event.stopPropagation();
                });

                // Don't trigger the context menu on modal windows
                $element.bind('contextmenu', function (event) {
                    event.stopPropagation();
                });
            }
        };
    });
}(angular));
