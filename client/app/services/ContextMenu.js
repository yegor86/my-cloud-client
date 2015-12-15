(function(angular) {
    "use strict";

    var module = angular.module('myCloudDriveApp');

    function ContextMenu($document) {
        var actions = {
            download: {name: 'download', title: 'Download'},
            open: {name: 'open', title: 'Open'},
            delete: {name: 'delete', title: 'Delete...'},
            rename: {name: 'rename', title: 'Rename'},
            copy: {name: 'copy', title: 'Copy...'},
            upload: {name: 'upload', title: 'Upload...'},
            newFolder: {name: 'create-folder', title: 'New folder'}};
        var marginBottom = 10;
        var menu = {};        
        
        menu.open = function (event) {
            this.isOpened = true;
            var doc = $document[0].documentElement,
                docLeft = (window.pageXOffset || doc.scrollLeft) - (doc.clientLeft || 0),
                docTop = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0),
                elementWidth = this.menuHtmlElement[0].scrollWidth,
                elementHeight = this.menuHtmlElement[0].scrollHeight,
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

            this.menuHtmlElement.css('top', top + 'px');
            this.menuHtmlElement.css('left', left + 'px');

            this.menuHtmlElement.addClass('opened');
        };

        menu.close = function () {
            if (this.isOpened === true) {
                this.menuHtmlElement.removeClass('opened');
                this.isOpened = false;
            }
        };

        menu.reset = function () {
            this.isOpened = false;
            this.menuHtmlElement = angular.element($document[0].getElementById('context-menu'));
            this.scope = this.menuHtmlElement.scope();
        };

        var getContextMenuActions = function(type) {
            if (type === 'document') {
                return [actions.upload, actions.newFolder];
            } else if (type === 'dir') {
                return [actions.open, actions.delete, actions.rename, actions.copy];
            } else {                
                return [actions.download, actions.open, actions.delete, actions.rename, actions.copy];
            }
        };

        return {
            createMenu: function(type) {
                menu.reset();
                menu.scope.actions = getContextMenuActions(type);
                return menu;
            },
            closeMenu: function() {
                menu.close();
            }           
        };
    }

    module.factory('ContextMenu', ContextMenu);
}(angular));
