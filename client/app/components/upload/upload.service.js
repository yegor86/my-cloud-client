(function (angular) {
    'use strict';

    angular
        .module('app.upload')
        .factory('uploadService', uploadService);

    /* @ngInject */
    function uploadService(upload) {
        return {
            send: function (data) {
                return upload({
                    url: '/files/upload',
                    method: 'POST',
                    data: data
                });
            }
        };
    }
}(angular));
