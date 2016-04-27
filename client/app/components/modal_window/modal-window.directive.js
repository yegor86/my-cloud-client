(function (angular) {
    'use strict';

    angular
        .module('app.modal-window')
        .directive('mccModalWindow', modalWindow);

    /* @ngInject */
    function modalWindow($document) {
        return {
            link: link,
            controller: ModalWindowController,
            controllerAs: 'modalWindow',
            restrict: 'E'
        };

        function link(scope, element, attrs, modalWindow) {
            modalWindow.overlayElement = angular.element($document[0].getElementById('modal-overlay'));
            modalWindow.overlayElement.bind('click', function (event) {
                if (modalWindow.isOpened() && element.hasClass('progressbar') === false) {
                    modalWindow.close();
                }
            });

            // Don't trigger the context menu on overlay
            modalWindow.overlayElement.bind('contextmenu', function (event) {
                event.stopPropagation();
            });

            // Don't trigger the context menu on modal windows
            element.bind('contextmenu', function (event) {
                event.stopPropagation();
            });

            scope.$on('closeModalWindow', function (event) {
                modalWindow.close();
            });
        }
    }

    /* @ngInject */
    function ModalWindowController($element) {
        var vm = this;
        vm.open = open;
        vm.close = close;
        vm.isOpened = isOpened;

        function open() {
            if (isOpened() === false) {
                $element.addClass('opened');
                vm.overlayElement.addClass('opened');
            }
        }

        function close() {
            if (isOpened() === true) {
                $element.removeClass('opened');
                vm.overlayElement.removeClass('opened');
            }
        }

        function isOpened() {
            return $element.hasClass('opened');
        }
    }
}(angular));
