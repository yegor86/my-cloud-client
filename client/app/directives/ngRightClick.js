(function (angular) {
    "use strict";

    var module = angular.module('myCloudDriveApp');

	module.directive('ngRightClick', function ($document, $parse) {
        return {
            link: function ($scope, $element, $attrs) {
                var fn = $parse($attrs.ngRightClick);
                var item = $scope.item;
		        $element.bind('contextmenu', function(event) {
		            $scope.$apply(function() {
		                event.preventDefault();
		                $scope.item = item;
		                fn($scope, {$event:event});
		            });	
		        });
            }
        };
    });

}(angular));