(function (angular) {
    'use strict';

    angular
        .module('app.share-folder')
        .factory('shareFolderService', shareFolderService);

    /* @ngInject */
    function shareFolderService($resource) {
        return $resource('/files/sharefolder', {}, {
            query: {
                method: 'POST',
                params: {
                    path: '@path',
                    email: '@email',
                    userUid: '@userUid',
                    permissions: '@permissions'
                }
            }
        });
    }
}(angular));
