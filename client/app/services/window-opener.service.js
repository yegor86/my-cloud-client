(function (angular) {
    'use strict';

    angular
        .module('app.core')
        .factory('windowOpener', windowOpener);

    function windowOpener() {
        return {
            close: close,
            isOpened: isOpened,
            open: open
        };

        function open(element) {
            if (element instanceof jQuery || element instanceof Object) {
                return element.addClass('opened');
            }
            return false;
        }

        function close(element) {
            if ((element instanceof jQuery || element instanceof Object) && isOpened(element)) {
                return element.removeClass('opened');
            }
            return false;
        }

        function isOpened(element) {
            return element.hasClass('opened');
        }
    }
}(angular));