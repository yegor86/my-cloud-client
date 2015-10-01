(function(angular) {
   "use strict";

    angular.module('myCloudDriveApp')
        .factory('FileNavigator', ['$resource',
            function($resource) {
                return $resource('/files/:fileId.json', {}, {
                    query: {method: 'GET', params: {fileId: 'files'}, isArray: true}
                });
            }
        ]);
}(angular));
