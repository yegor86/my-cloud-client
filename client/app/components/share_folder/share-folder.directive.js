(function (angular) {
    'use strict';

    angular
        .module('app.share-folder')
        .directive('mccShareFolder', shareFolder);

    /* @ngInject */
    function shareFolder($document) {
        return {
            require: 'mccModalWindow',
            templateUrl: 'app/components/share_folder/share-folder.html',
            controller: ShareFolderController,
            controllerAs: 'shareFolder',
            restrict: 'A',
            link: link
        };

        function link(scope, element, attrs, modalWindow) {
            scope.$on('shareFolder', function (event) {
                scope.shareFolderName = event.targetScope.fileName;
                event.stopPropagation();
                modalWindow.open(event);
            });
        }
    }

    /* @ngInject */
    function ShareFolderController($scope) {
        var vm = this;
        vm.share = share;

        function share(event) {

        }
    }
}(angular));