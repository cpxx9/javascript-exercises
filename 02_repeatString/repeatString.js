const repeatString = function(string, num) {
    let loopedString = "";
    let loopAmt = num;

    if (loopAmt < 0) {
        return "ERROR";
    }
    else {
        for (let i = 0; i < loopAmt; i++) {
            loopedString += string;
        }
        return loopedString;
    }
};

// Do not edit below this line
module.exports = repeatString;
