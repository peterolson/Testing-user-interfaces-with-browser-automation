var selectors = {
    weight: "input[name=weight]",
    height: "input[name=height]",
    submit: "input[type=submit]",
    bmi: "#bmi",
    category: "#category",
    result: "#result",
    error: "#error"
};

var expectedResults = {
    "very severely underweight": [[40, 170, "13.84"], [40, 180, "12.35"], [40, 190, "11.08"], [40, 200, "10.00"], [55, 200, "13.75"]],
    "severely underweight": [[40, 160, "15.62"], [50, 180, "15.43"], [60, 195, "15.78"], [60, 200, "15.00"]],
    "underweight": [[40, 150, "17.78"], [40, 155, "16.65"], [50, 165, "18.37"], [50, 170, "17.30"], [50, 175, "16.33"], [60, 185, "17.53"], [70, 195, "18.41"]],
    "normal": [[55, 150, "24.44"], [55, 160, "21.48"], [55, 170, "19.03"], [70, 170, "24.22"], [70, 180, "21.60"], [70, 190, "19.39"], [85, 190, "23.55"], [85, 200, "21.25"]],
    "overweight": [[70, 160, "27.34"], [85, 170, "29.41"], [85, 180, "26.23"], [100, 190, "27.70"], [100, 200, "25.00"], [115, 200, "28.75"]],
    "obese": [[70, 150, "31.11"], [85, 160, "33.20"], [100, 170, "34.60"], [100, 180, "30.86"], [115, 190, "31.86"], [130, 200, "32.50"]],
    "severely obese": [[85, 150, "37.78"], [100, 160, "39.06"], [115, 170, "39.79"], [115, 180, "35.49"], [130, 190, "36.01"], [145, 200, "36.25"]],
    "very severely obese": [[100, 150, "44.44"], [115, 160, "44.92"], [130, 180, "40.12"], [145, 190, "40.17"], [160, 200, "40.00"]]
};

var expectedInputValidation = [
    ["", "", false],
    ["100", "100", true],
    ["100", "", false],
    ["", "100", false],
    ["40", "100", true],
    ["100", "40", true],
    ["NaN", "100", false],
    ["100", "NaN", false],
    ["blah blah blah", "123", false],
    ["1.35", "4.43", true],
    ["35", "{]{]}%^@#^", false],
    ["rm -rf /", "Robert'); DROP TABLE students;--", false],
    ["100", "0", true],
    ["0", "100", true],
    ["0", "0", false]];

module.exports = {
    "Open page": function (browser) {
        browser.url("file://D:/Projects/Articles/browserAutomation/BMICalculator.html")
          .expect.element(selectors.result).not.to.be.visible;
    },
    "Outputs expected values": function (browser) {
        for (category in expectedResults) {
            var values = expectedResults[category];
            for (var i = 0; i < values.length; i++) {
                var weight = values[i][0],
                    height = values[i][1],
                    bmi = values[i][2];
                browser
                  .clearValue(selectors.weight)
                  .setValue(selectors.weight, weight)
                  .clearValue(selectors.height)
                  .setValue(selectors.height, height)
                  .click(selectors.submit);
                browser.expect.element(selectors.result).to.be.visible;
                browser.expect.element(selectors.category).text.to.equal(category);
                browser.expect.element(selectors.bmi).text.to.equal(bmi);
            }
        }
    },
    "Validates input": function (browser) {
        for (var i = 0; i < expectedInputValidation.length; i++) {
            var values = expectedInputValidation[i],
                weight = values[0],
                height = values[1],
                isValid = values[2];
            browser.clearValue(selectors.weight)
              .setValue(selectors.weight, weight)
              .clearValue(selectors.height)
              .setValue(selectors.height, height)
              .click(selectors.submit);
            if (isValid) {
                browser.expect.element(selectors.result).to.be.visible;
                browser.expect.element(selectors.error).not.to.be.visible;
            } else {
                browser.expect.element(selectors.result).not.to.be.visible;
                browser.expect.element(selectors.error).to.be.visible;
            }
        }
    },
    "Close page": function (browser) {
        browser.end();
    }
};