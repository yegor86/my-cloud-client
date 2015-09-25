(function() {
    "use strict";

    angular.module('myCloudDriveApp')
        .controller('IndexCtrl', function($scope) {
            $scope.greeting = 'Hello!';

            $scope.customSpice = "wasabi";
            $scope.spice = "very";

            $scope.spicy = function(spice) {
                $scope.spice = spice;
            };
        });
}());