(function (angular) {
    'use strict';

    angular
        .module('app.core')
        .directive('mccRightClick', rightClick);

    /* @ngInject */
	function rightClick($parse) {
        return {
            link: link,
            restrict: 'A'
        };

        function link(scope, element, attrs) {
            var fn = $parse(attrs.mccRightClick);
            var item = scope.item;
            element.bind('contextmenu', function (event) {
                event.stopImmediatePropagation();
                scope.$apply(function () {
                    event.preventDefault();
                    scope.item = item;
                    fn(scope, {$event: event});
                });
            });
        }
    }
}(angular));