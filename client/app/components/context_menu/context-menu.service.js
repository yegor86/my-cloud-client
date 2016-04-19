(function (angular) {
    'use strict';

    angular
        .module('app.context-menu')
        .service('contextMenuService', contextMenuService);

    /* @ngInject */
    function contextMenuService($document) {
        var menu = this;
        menu.getActions = getActions;
        menu.createMenu = createMenu;
        menu.hideMenu = hideMenu;
        menu.isShown = false;

        var MARGIN_BOTTOM = 10;
        var actions = {
            download: {name: 'download', title: 'Download'},
            open: {name: 'open', title: 'Open'},
            delete: {name: 'delete', title: 'Delete...'},
            rename: {name: 'rename', title: 'Rename'},
            copy: {name: 'copy', title: 'Copy...'},
            upload: {name: 'upload', title: 'Upload...'},
            newFolder: {name: 'create-folder', title: 'New folder'},
            share: {name: 'share-folder', title: 'Share...'}};

        function getActions(type) {
            if (type === 'document') {
                return [actions.upload, actions.newFolder];
            } else if (type === 'dir') {
                return [actions.open, actions.delete, actions.rename, actions.copy, actions.share];
            } else {
                return [actions.download, actions.open, actions.delete, actions.rename, actions.copy];
            }
        }

        function createMenu(menuType, event) {
            setPosition(event);
            if (menu.type !== menuType) {
                menu.scope = menu.element.scope();
                menu.scope.$apply(function () {
                    menu.actions = getActions(menuType);
                });
                menu.type = menuType;
            }
            showMenu();
        }

        function showMenu() {
            if (menu.isShown === false && menu.type !== undefined) {
                menu.isShown = true;
                menu.element.addClass('opened');
            }
        }

        function hideMenu() {
            if (menu.isShown === true) {
                menu.isShown = false;
                menu.element.removeClass('opened');
            }
        }

        function setPosition(event) {
            var top = getTopPosition(event);
            var left = getLeftPosition(event);

            menu.element.css('top', top + 'px');
            menu.element.css('left', left + 'px');
        }

        function getTopPosition(event) {
            var doc = $document[0].documentElement,
                docTop = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0),
                elementHeight = menu.element[0].scrollHeight,
                docHeight = doc.clientHeight + docTop,
                totalHeight = elementHeight + event.pageY,
                top = Math.max(event.pageY - docTop, 0);

            if (totalHeight > docHeight) {
                var margin = MARGIN_BOTTOM || 0;
                top = top - (totalHeight - docHeight) - margin;
            }
            return top;
        }

        function getLeftPosition(event) {
            var doc = $document[0].documentElement,
                docLeft = (window.pageXOffset || doc.scrollLeft) - (doc.clientLeft || 0),
                elementWidth = menu.element[0].scrollWidth,
                docWidth = doc.clientWidth + docLeft,
                totalWidth = elementWidth + event.pageX,
                left = Math.max(event.pageX - docLeft, 0);

            if (totalWidth > docWidth) {
                left = left - (totalWidth - docWidth);
            }
            return left;
        }
    }
}(angular));
