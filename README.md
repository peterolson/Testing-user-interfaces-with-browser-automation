This repository contains all the code from the article Testing user interfaces with browser automation.

# Setup

Download the ZIP of this project (or do a git pull). If you don't have [Nightwatch](http://nightwatchjs.org/) installed, you can install it with

    npm install nightwatch -g
    
To run the browser tests, navigate to this project in your Node console and run

    nightwatch -t tests/[name-of-test]
    
where `[name-of-test]` can be `searchExample`, `BMICalculator`, or `asyncExample`.

# Contributing

Feel free to open an issue or add a pull request if you have any improvements to suggest.