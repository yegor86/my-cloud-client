(function(angular) {
   "use strict";

    var module = angular.module('myCloudDriveApp');

    function FileManager($resource) {
        return $resource('/files/:path/:fileId.json', {}, {
            query: {
                method: 'GET',
                params: {path: '', fileId: 'files'},
                isArray: true
            }
        });
    }

    module.factory('FileManager', FileManager);
}(angular));
