(function (angular) {
	"use strict";

	var module = angular.module('myCloudDriveApp');

	function Download($resource) {
		return $resource('/files/download:path', {}, {
            query: {
                method: 'GET',
                params: {path: ''},
                isArray: true
            }
        });
	}

	module.factory('Download', Download);

}(angular));