(function (angular) {
    'use strict';

    angular
        .module('app.breadcrumbs')
        .factory('breadcrumbsService', breadcrumbsService);

    /* @ngInject */
    function breadcrumbsService() {
        return {
            createBreadcrumbs: createBreadcrumbs
        };

        function createBreadcrumbs(url) {
            var breadcrumbs = [],
                paths,
                folderPath = '';

            url = 'home' + url;

            if (url[url.length - 1] === '/') {
                url = url.slice(0, -1);
            }

            paths = url.split('/');

            for (var i = 0; i < paths.length; i++) {
                folderPath = [folderPath, paths[i]].join("/");
                breadcrumbs.push({
                    name: paths[i],
                    path: folderPath
                });
            }

            breadcrumbs[0].name = 'MyCloudDrive';

            return breadcrumbs;
        }
    }

}(angular));
