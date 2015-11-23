(function(angular) {
   "use strict";

    var module = angular.module('myCloudDriveApp');

    function FileManager($resource) {
        return {
            files: $resource('/files:path', {}, {
                query: {
                    method: 'GET',
                    params: {path: ''},
                    isArray: true
                }
            }),
            // Use the separate object because of we are using 'angular-upload' module to
            // upload files. See https://github.com/leon/angular-upload
            upload: {
                method: 'POST',
                'path': '/files/upload'
            }
        };
    }

    module.factory('FileManager', FileManager);
}(angular));
