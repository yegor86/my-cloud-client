(function (angular) {
    "use strict";

    var module = angular.module('myCloudDriveApp');

    function Upload(upload) {
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

    module.factory('Upload', Upload);
}(angular));
