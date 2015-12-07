(function (angular) {
    "use strict";

    var module = angular.module('myCloudDriveApp');

	module.directive('ngRightClick', function ($document, $parse) {
        return {
            link: function ($scope, $element, $attrs) {
                var fn = $parse($attrs.ngRightClick);
		        $element.bind('contextmenu', function(event) {
		            $scope.$apply(function() {
		                event.preventDefault();
		                $scope.item = {};
		                $scope.item.name = 'xXx';
		                fn($scope, {$event:event});
		            });
		        });
            }
        };
    });

}(angular));