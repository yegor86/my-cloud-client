(function (angular) {
    'use strict';

    angular
        .module('app.create-folder')
        .factory('createFolderService', createFolderService);

    /* @ngInject */
    function createFolderService($resource) {
        return $resource('/files/createfolder', {}, {
            send: {
                method: 'POST',
                params: {
                    path: '@path',
                    email: '@email'
                }
            }
        });
    }
}(angular));
