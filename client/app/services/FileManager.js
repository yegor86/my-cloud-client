(function(angular) {
   "use strict";

    var module = angular.module('myCloudDriveApp');

    function FileManager($resource) {
        return $resource('/files:path', {}, {
            query: {
                method: 'GET',
                params: {path: ''},
                isArray: true
            },
            upload: {
                method: 'POST',
                params: {path: '/upload'},
                headers: {'Content-Type': 'multipart/form-data; boundary=63iPy32oty'}
            }
        });
    }

    module.factory('FileManager', FileManager);
}(angular));
