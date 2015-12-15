(function(angular) {
    "use strict";

    var module = angular.module('myCloudDriveApp');

    function ContextMenu() {
        var actions = {
            download: {name: 'download', title: 'Download'},
            open: {name: 'open', title: 'Open'},
            delete: {name: 'delete', title: 'Delete...'},
            rename: {name: 'rename', title: 'Rename'},
            copy: {name: 'copy', title: 'Copy...'},
            upload: {name: 'upload', title: 'Upload...'},
            newFolder: {name: 'create-folder', title: 'New folder'}};

        return {
            marginBottom: 10,
            getContextMenuActions: function(type) {
                if (type === 'file') {
                    return [actions.download, actions.open, actions.delete, actions.rename, actions.copy];
                } else if (type === 'dir') {
                    return [actions.open, actions.delete, actions.rename, actions.copy];
                } else {
                    return [actions.upload, actions.newFolder];
                }
            }
        };
    }

    module.factory('ContextMenu', ContextMenu);
}(angular));
