(function(angular) {
    "use strict";

    angular.module('myCloudDriveApp')
        .controller('IndexCtrl', ['$scope', 'FileNavigator', function($scope, FileNavigator) {
            $scope.files = FileNavigator.query();
        }]);
}(angular));