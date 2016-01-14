(function (angular) {
	"use strict";

	var module = angular.module('myCloudDriveApp');

	function Download($window, $stateParams) {

        return {
            download: function(userEmail, fileName) {
                console.log(userEmail);
                var path = '/files/download/' + userEmail + $stateParams.path + '/' + fileName;
                $window.open(path, '_self');
            }
        };
    }
	module.factory('Download', Download);

}(angular));