(function (angular) {
    "use strict";

    function valToString(val) {
        return val !== null ? val.toString() : val;
    }

    angular.module('myCloudDriveApp', [
        'ui.router',
        'ngResource',
        'lr.upload'
    ]).config(function ($stateProvider, $urlRouterProvider, $urlMatcherFactoryProvider, $locationProvider) {
        // Register a custom type with regexp to replace encoded slashes
        // https://github.com/angular-ui/ui-router/issues/1119#issuecomment-64696060
        $urlMatcherFactoryProvider.type('nonURIEncoded', {
            encode: valToString,
            decode: valToString,
            pattern: /(?:\/?[a-zA-Z0-9_-\s]?)*/
        });

        $stateProvider
            .state('home', {
                abstract: true,
                templateUrl: 'partials/home.html',
                controller: 'HomeCtrl'
            })
            .state('home.files', {
                url: '/home{path:nonURIEncoded}',
                views: {
                    filesList: {
                        templateUrl: 'partials/home.files.html',
                        controller: 'FilesCtrl'
                    },
                    contextMenu: {
                        templateUrl: 'partials/home.context-menu.html',
                        controller: 'ContextMenuCtrl'
                    },
                    upload: {
                        templateUrl: 'partials/home.upload.html',
                        controller: 'UploadCtrl'
                    },
                    uploadProgressbar: {
                        templateUrl: 'partials/home.upload-progressbar.html',
                        controller: 'UploadCtrl'
                    },
                    createFolder: {
                        templateUrl: 'partials/home.create-folder.html',
                        controller: 'CreateFolderCtrl'
                    }
                }
            })
            .state('about', {
                url: '/about',
                templateUrl: 'partials/about.html',
                controller: 'AboutCtrl'
            })
            .state('error', {
                templateUrl: 'partials/error.html',
                controller: 'ErrorCtrl'
            });
        $urlRouterProvider.when('/', '/home');
        $locationProvider.html5Mode(true);
    });
}(angular));