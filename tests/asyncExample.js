module.exports = {
    'Asynchronous example': function (browser) {
        browser.url("file:///D:/Projects/Articles/browserAutomation/asyncExample.html");
        for (var i = 1; i <= 10; i++) {
            browser.click("#add")
              .waitForElementVisible(".item" + i, 1000);
        }
        browser.end();
    }
};