(function (angular) {
    "use strict";

    var module = angular.module('myCloudDriveApp');

    function HomeCtrl($scope) {

        $scope.setBreadcrumbs = function (url) {
            var folders = [],
                paths,
                folderPath = '';

            if (url[url.length - 1] === '/') {
                url = url.slice(0, -1);
            }

            paths = url.split('/');

            for (var i = 0; i < paths.length; i++) {
                folderPath = [folderPath, paths[i]].join("/");
                folders.push({
                    name: paths[i],
                    path: folderPath
                });
            }

            folders[0].name = 'MyCloudDrive';

            $scope.currentFolder = folders.pop();
            $scope.folders = folders;
        };

        // Set a default sort type
        $scope.sortType = 'name';
    }

    module.controller('HomeCtrl', HomeCtrl);
}(angular));