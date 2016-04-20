This repository contains all the code from the article [Testing user interfaces with browser automation](http://tutorials.pluralsight.com/front-end-javascript/testing-user-interfaces-with-browser-automation).

# Setup

Download the ZIP of this project (or do a git pull). If you don't have [Nightwatch](http://nightwatchjs.org/) installed, you can install it with

    npm install nightwatch -g
    
You'll need to [download the selenium server standalone jar file](http://selenium-release.storage.googleapis.com/2.53/selenium-server-standalone-2.53.0.jar) and place it in the `bin` folder.
    
To run the browser tests, navigate to this project in your Node console and run

    nightwatch -t tests/[name-of-test]
    
where `[name-of-test]` can be `searchExample`, `BMICalculator`, or `asyncExample`.

If you run the `BMICalculator` or `asyncExample` test, you will need to modify the line of code indicating the file path to the HTML file it tests. You can search for this line

    browser.url("file://D:/Projects/Articles/browserAutomation/BMICalculator.html")
    
and enter the actual path.

# Contributing

Feel free to open an issue or add a pull request if you have any improvements to suggest.