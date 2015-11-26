(function (angular) {
    "use strict";

    var module = angular.module('myCloudDriveApp');

    function CreateDirectory($resource) {
        return $resource('/files/createdirectory', {}, {
            send: {
                method: 'POST',
                headers: {'Content-Type': undefined}
            }
        });
    }

    module.factory('CreateDirectory', CreateDirectory);
}(angular));
