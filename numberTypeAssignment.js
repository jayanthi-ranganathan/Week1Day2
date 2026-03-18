function checkNumberType(num) {
     let result;
    if (num > 0) {
      result = "The number is positive";
    } 
    else if (num < 0) {
        result = "The number is negative";
    } 
    else {
       result = "The number is neutral (zero)";
    }

    return result;
}

const testNumber = 10; 
const outcome = checkNumberType(testNumber);

console.log("Input:", testNumber);
console.log("Output:", outcome);