'use strict';

describe('myCloudDriveApp', function() {

    beforeEach(function() {
        browser.get('http://localhost:3000/');
    });

    it('should be a home link', function() {
        var link = element(by.css('a'));
        link.click();

        expect(link.getText()).toBe('home');
    });

    it('should open a dir and then return back', function() {
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
