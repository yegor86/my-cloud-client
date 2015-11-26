(function (angular) {
    "use strict";

    var module = angular.module('myCloudDriveApp');

    function FileManager($resource) {
        return $resource('/files:path', {}, {
            query: {
                method: 'GET',
                params: {path: ''},
                isArray: true
            }
        });
    }

    module.factory('FileManager', FileManager);
}(angular));
