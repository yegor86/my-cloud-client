describe('filesService', function () {
    'use strict';

    var service;

    beforeEach(module('app'));

    beforeEach(inject(function (filesService) {
        service = filesService;
    }));

    it('should return an empty array if the response is not array', function () {
        var items = service.query();
        expect(items).toEqual([]);
    });
});
