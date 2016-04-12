(function (angular) {
    'use strict';

    angular
        .module('app.notify')
        .directive('mccNotify', notify);

    /* @ngInject */
    function notify($timeout) {
        return {
            templateUrl: 'app/components/notify/notify.html',
            controller: NotifyController,
            controllerAs: 'notify',
            restrict: 'A',
            link: link
        };

        function link(scope, element, attrs, notify) {
            scope.$on('error', function (event, response) {
                notify.message =
                    (response === undefined || response.data === null) ? 'Undefined error' : response.data.message;
                notify.class = 'server-error';
                notify.showMessage = true;

                $timeout(function () {
                    notify.showMessage = false;
                }, 3000);
            });
        }
    }

    /* @ngInject */
    function NotifyController($scope) {
        var vm = this;
        vm.showMsg = false;
    }
}(angular));
