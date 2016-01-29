(function (angular) {
    'use strict';

    angular
        .module('app.modal-window')
        .directive('mccModalWindow', modalWindow);

    /* @ngInject */
    function modalWindow($document, windowOpener) {
        return {
            link: link,
            controller: ModalWindowController,
            controllerAs: 'modalWindow',
            restrict: 'E'
        };

        function link(scope, element, attrs, modalWindow) {
            scope.overlayElement = angular.element($document[0].getElementById('modal-overlay'));
            scope.overlayElement.bind('click', function (event) {
                if (windowOpener.isOpened(element) && element.hasClass('progressbar') === false) {
                    modalWindow.close(event);
                }
            });

            // Don't trigger the context menu on overlay
            scope.overlayElement.bind('contextmenu', function (event) {
                event.stopPropagation();
            });

            // Don't trigger the context menu on modal windows
            element.bind('contextmenu', function (event) {
                event.stopPropagation();
            });

            scope.$on('closeModalWindow', function (event) {
                modalWindow.close(event);
            });
        }
    }

    /* @ngInject */
    function ModalWindowController($scope, $element, windowOpener) {
        var vm = this;
        vm.open = open;
        vm.close = close;

        function open(event) {
            windowOpener.open($scope.overlayElement);
            windowOpener.open($element);
        }

        function close(event) {
            windowOpener.close($scope.overlayElement);
            windowOpener.close($element);
        }
    }
}(angular));
