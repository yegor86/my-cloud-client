(function (angular) {
    "use strict";

    var module = angular.module('myCloudDriveApp');

    function Files($resource) {

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

    module.factory('Files', Files);
}(angular));
