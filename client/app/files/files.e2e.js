describe('files', function () {
    'use strict';

    beforeEach(function () {
        browser.get('http://localhost:3000/');
    });

    it('should open a dir and then return back', function () {
        var dirCssClass = '.sprite-dir',
            dirElement = element(by.css(dirCssClass));

        if (dirElement.isPresent() === true) {
            var dirs = element.all(by.css(dirCssClass)),
                dirsCount = dirs.length;

            dirs.get(0).click();
            browser.navigate().back();
            dirs = element.all(by.css(dirCssClass));
            expect(dirs.length).toBe(dirsCount);
        }
    });
});
