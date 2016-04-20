module.exports = {
    'Search engine example': function (browser) {
        browser
          // Navigate to Bing
          .url('http://bing.com')
          // Enter "Hello world" into the search box
          .setValue('input[name=q]', 'Hello, world!')
          // Click the search button
          .click('input[type=submit]')
          // Read the span with the search result count
          .getText('span.sb_count', function (result) {
              console.log(result.value);
          })
          // Close the browser
          .end();
    }
};