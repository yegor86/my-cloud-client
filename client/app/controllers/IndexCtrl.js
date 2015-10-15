(function(angular) {
    "use strict";

    angular.module('myCloudDriveApp')
        .controller('IndexCtrl', function($scope, FileNavigator) {
            $scope.items = FileNavigator.query();
        });
}(angular));