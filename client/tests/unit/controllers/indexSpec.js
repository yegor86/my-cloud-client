describe('IndexCtrl', function() {
    'use strict';

    var scope, ctrl, httpBackend;

    beforeEach(module('myCloudDriveApp'));
    beforeEach(inject(function($httpBackend, $rootScope, $controller) {
        httpBackend = $httpBackend;
        httpBackend.expectGET('/files/files.json')
            .respond([{name: "some-image.jpg"}, {name: "some-text.txt"}]);

        scope = $rootScope.$new();
        ctrl = $controller('IndexCtrl', {$scope: scope});
    }));

    it('should be wasabi', function() {
        httpBackend.flush();
        expect(scope.files.length).toBe(2);
    });
});
