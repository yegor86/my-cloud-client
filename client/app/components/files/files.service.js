(function (angular) {
    'use strict';

    angular
        .module('app.files')
        .factory('filesService', filesService);

    /* @ngInject */
    function filesService($resource) {

        function transformResponse(response) {
            response = angular.fromJson(response);

            if (response instanceof Array) {
                return response;
            }

            return [];
        }

        return $resource('/files/list/:email:path', {}, {
            query: {
                method: 'GET',
                params: {path: ''},
                isArray: true,
                transformResponse: transformResponse
            }
        });
    }
}(angular));
