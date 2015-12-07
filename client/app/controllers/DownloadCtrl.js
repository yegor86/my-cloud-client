(function (angular) {
	"use strict";
	var module = angular.module('myCloudDriveApp');

	function DownloadCtrl($document, $state, $stateParams, $scope, Download){

		function errorHandler(error) {
            $state.transitionTo('error');
        }

        function successHandler(response) {
        }

        $scope.download = function (files) {
            var path = $stateParams.path;

        	window.alert("Hello world: " + path);
        };
    }

    module.controller('DownloadCtrl', DownloadCtrl);

}(angular));