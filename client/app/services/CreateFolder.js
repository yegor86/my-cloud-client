(function (angular) {
    "use strict";

    var module = angular.module('myCloudDriveApp');

    function CreateFolder(upload) {
        return {
            send: function (data) {
                return upload({
                    url: '/files/createfolder',
                    method: 'POST',
                    data: data
                });
            }
        };
    }

    module.factory('CreateFolder', CreateFolder);
}(angular));
