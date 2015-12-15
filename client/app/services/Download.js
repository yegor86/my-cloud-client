(function (angular) {
	"use strict";

	var module = angular.module('myCloudDriveApp');

	function Download($stateParams) {

        return {
            download: function($window, fileName) {
                var path = '/files/download' + $stateParams.path + '/' + fileName;
                $window.open(path, '_self');
            }
        };
    }
	module.factory('Download', Download);

}(angular));