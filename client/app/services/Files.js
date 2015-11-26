(function (angular) {
    "use strict";

    var module = angular.module('myCloudDriveApp');

    function Files($resource) {
        return $resource('/files:path', {}, {
            query: {
                method: 'GET',
                params: {path: ''},
                isArray: true
            }
        });
    }

    module.factory('Files', Files);
}(angular));
