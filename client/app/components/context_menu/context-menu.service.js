(function (angular) {
    'use strict';

    angular
        .module('app.context-menu')
        .factory('contextMenuService', contextMenuService);

    /* @ngInject */
    function contextMenuService($document, windowOpener) {
        var actions = {
            download: {name: 'download', title: 'Download'},
            open: {name: 'open', title: 'Open'},
            delete: {name: 'delete', title: 'Delete...'},
            rename: {name: 'rename', title: 'Rename'},
            copy: {name: 'copy', title: 'Copy...'},
            upload: {name: 'upload', title: 'Upload...'},
            newFolder: {name: 'create-folder', title: 'New folder'},
            share: {name: 'share-folder', title: 'Share...'}};

        var menu = {};

        menu.marginBottom = 10;

        menu.open = function (event) {
            var doc = $document[0].documentElement,
                docLeft = (window.pageXOffset || doc.scrollLeft) - (doc.clientLeft || 0),
                docTop = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0),
                elementWidth = this.element[0].scrollWidth,
                elementHeight = this.element[0].scrollHeight,
                docWidth = doc.clientWidth + docLeft,
                docHeight = doc.clientHeight + docTop,
                totalWidth = elementWidth + event.pageX,
                totalHeight = elementHeight + event.pageY,
                left = Math.max(event.pageX - docLeft, 0),
                top = Math.max(event.pageY - docTop, 0);

            if (totalWidth > docWidth) {
                left = left - (totalWidth - docWidth);
            }

            if (totalHeight > docHeight) {
                var margin = this.marginBottom || 0;
                top = top - (totalHeight - docHeight) - margin;
            }

            this.element.css('top', top + 'px');
            this.element.css('left', left + 'px');

            windowOpener.open(this.element);
        };

        menu.isOpened = function () {
            if (this.element === undefined) {
                return false;
            }
            return windowOpener.isOpened(this.element);
        };

        menu.reset = function () {
            this.element = angular.element($document[0].getElementById('context-menu'));
            this.scope = this.element.scope();
        };

        menu.close = function () {
            if (windowOpener.isOpened(this.element)) {
                windowOpener.close(this.element);
            }
        };

        return {
            createMenu: createMenu,
            getMenu: getMenu
        };

        function createMenu(type) {
            menu.reset();
            menu.scope.actions = getActions(type);
            return menu;
        }

        function getActions(type) {
            if (type === 'document') {
                return [actions.upload, actions.newFolder];
            } else if (type === 'dir') {
                return [actions.open, actions.delete, actions.rename, actions.copy, actions.share];
            } else {
                return [actions.download, actions.open, actions.delete, actions.rename, actions.copy];
            }
        }

        function getMenu() {
            return menu;
        }
    }
}(angular));
