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
            element.bind('contextmenu', function (event) {
                event.stopImmediatePropagation();                
                event.preventDefault();
                fn(scope, {$event: event});
            });
        }
    }
}(angular));