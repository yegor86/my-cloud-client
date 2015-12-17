(function (angular) {
    "use strict";

    var module = angular.module('myCloudDriveApp');

    module.directive('breadcrumbs', function () {
        return {
            restrict: "E",
            templateUrl: "partials/breadcrumbs.html",
            controller: function ($scope) {
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
            },
            link: function () {
            }
        };
    });
}(angular));