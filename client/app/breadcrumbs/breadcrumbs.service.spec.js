describe('breadcrumbsService', function () {
    'use strict';

    var service;

    beforeEach(module('app'));

    beforeEach(inject(function (breadcrumbsService) {
        service = breadcrumbsService;
    }));

    it('should create breadcrumbs from the url', function () {
        var breadcrumbs = service.createBreadcrumbs('/something/path');
        expect(breadcrumbs[0]).toEqual({name: 'MyCloudDrive', path: '/home'});
        expect(breadcrumbs[1]).toEqual({name: 'something', path: '/home/something'});
        expect(breadcrumbs[2]).toEqual({name: 'path', path: '/home/something/path'});
    });

    it('should slice a slash in the end of the url', function () {
        var breadcrumbs = service.createBreadcrumbs('/something/path/');
        expect(breadcrumbs[2].path).toEqual('/home/something/path');
    });
});
