describe('HomeCtrl', function() {
    "use strict";

    var scope, ctrl, httpBackend, state;

    beforeEach(module('myCloudDriveApp'));
    beforeEach(inject(function($httpBackend, $rootScope, $controller, $state) {
        httpBackend = $httpBackend;
        state = $state;

        httpBackend.expectGET('/files//files.json')
            .respond([
                {name: "some-image.jpg", type: "image"},
                {name: "some-text.txt", type: "text"},
                {name: "some-dir", type: "dir"}
            ]);
        httpBackend.expectGET('partials/home.html').respond('<html><head></head><body></body></html>');
        httpBackend.expectGET('partials/home.files.html').respond('<ol><li></li></ol>');

        scope = $rootScope.$new();
        ctrl = $controller('HomeCtrl', {$scope: scope});
    }));

    it('should be 3 items', function() {
        httpBackend.flush();
        expect(scope.items.length).toBe(3);
    });
});
