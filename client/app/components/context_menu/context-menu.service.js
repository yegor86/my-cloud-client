(function (angular) {
    'use strict';

    angular
        .module('app.context-menu')
        .factory('contextMenuService', contextMenuService);

    /* @ngInject */
    function contextMenuService($document) {
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

        return {
            getActions: getActions,
            getTopPosition: getTopPosition,
            getLeftPosition: getLeftPosition
        };

        function getActions(type) {
            if (type === 'document') {
                return [actions.upload, actions.newFolder];
            } else if (type === 'dir') {
                return [actions.open, actions.delete, actions.rename, actions.copy, actions.share];
            } else {
                return [actions.download, actions.open, actions.delete, actions.rename, actions.copy];
            }
        }

        function getTopPosition(element, event) {
            var doc = $document[0].documentElement,
                docTop = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0),
                elementHeight = element[0].scrollHeight,
                docHeight = doc.clientHeight + docTop,
                totalHeight = elementHeight + event.pageY,
                top = Math.max(event.pageY - docTop, 0);

            if (totalHeight > docHeight) {
                var margin = MARGIN_BOTTOM || 0;
                top = top - (totalHeight - docHeight) - margin;
            }
            return top;
        }

        function getLeftPosition(element, event) {
            var doc = $document[0].documentElement,
                docLeft = (window.pageXOffset || doc.scrollLeft) - (doc.clientLeft || 0),
                elementWidth = element[0].scrollWidth,
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
