(function (angular) {
	'use strict';

	angular
        .module('app.download')
        .factory('downloadService', downloadService);

    /* @ngInject */
	function downloadService($window, $stateParams) {
        return {
            download: function(fileName) {
                var path = '/files/download' + $stateParams.path + '/' + fileName;
                $window.open(path, '_self');
            }
        };
    }
}(angular));