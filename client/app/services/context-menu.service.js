(function (angular) {
    'use strict';

    angular
        .module('myCloudDriveApp')
        .factory('contextMenuService', contextMenuService);

    /* @ngInject */
    function contextMenuService($document, domElementOpener) {
        var actions = {
            download: {name: 'download', title: 'Download'},
            open: {name: 'open', title: 'Open'},
            delete: {name: 'delete', title: 'Delete...'},
            rename: {name: 'rename', title: 'Rename'},
            copy: {name: 'copy', title: 'Copy...'},
            upload: {name: 'upload', title: 'Upload...'},
            newFolder: {name: 'create-folder', title: 'New folder'}};

        var marginBottom = 10,
            menuElement,
            scope;

        return {
            closeMenu: closeMenu,
            createMenu: createMenu,
            getScope: getScope,
            openMenu: openMenu
        };

        function closeMenu() {
            if (domElementOpener.isOpened(menuElement)) {
                domElementOpener.close(menuElement);
            }
        }

        function createMenu(type) {
            reset();
            scope.actions = getMenuActions(type);
        }

        function getMenuActions(type) {
            if (type === 'document') {
                return [actions.upload, actions.newFolder];
            } else if (type === 'dir') {
                return [actions.open, actions.delete, actions.rename, actions.copy];
            } else {
                return [actions.download, actions.open, actions.delete, actions.rename, actions.copy];
            }
        }

        function getScope() {
            return scope;
        }
        
        function openMenu(event) {
            var doc = $document[0].documentElement,
                docLeft = (window.pageXOffset || doc.scrollLeft) - (doc.clientLeft || 0),
                docTop = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0),
                elementWidth = menuElement[0].scrollWidth,
                elementHeight = menuElement[0].scrollHeight,
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
                var margin = marginBottom || 0;
                top = top - (totalHeight - docHeight) - margin;
            }

            menuElement.css('top', top + 'px');
            menuElement.css('left', left + 'px');

            domElementOpener.open(menuElement);
        }

        function reset() {
            menuElement = angular.element($document[0].getElementById('context-menu'));
            scope = menuElement.scope();
        }
    }

}(angular));
