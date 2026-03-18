function launchBrowser(browserName) {
    if (browserName.toLowerCase() === "chrome") {
        console.log("Browser: Chrome launched successfully.");
    } else {
        console.log("Browser: " + browserName + " is not supported in this check, but launching anyway.");
    }
}

function runTests(testType) {
    switch (testType) {
        case "smoke":
            console.log("Execution Mode: Running Smoke Tests...");
            break;
        case "sanity":
            console.log("Execution Mode: Running Sanity Tests...");
            break;
        case "regression":
            console.log("Execution Mode: Running Regression Tests...");
            break;
        default:
            console.log("Execution Mode: Invalid type provided. Defaulting to Smoke Tests...");
            break;
    }
}

// Calling the functions
launchBrowser("chrome");
launchBrowser("firefox");

console.log("---"); // Separator for printing in the terminal for readbility

runTests("regression");
