(function (angular) {
    'use strict';

    angular
        .module('app.create-folder')
        .factory('createFolderService', createFolderService);

    /* @ngInject */
    function createFolderService(upload) {
        return {
            send: function (data) {
                return upload({
                    url: '/files/createfolder',
                    method: 'POST',
                    data: data
                });
            }
        };
    }
}(angular));
