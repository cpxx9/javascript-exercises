const palindromes = function (string) {
    let stringArr = string.match(/[A-Za-z0-9]/g);
    
    let reverseString = stringArr.slice().reverse();
    
    return (stringArr.toString().toLowerCase() === reverseString.toString().toLowerCase());
};

// Do not edit below this line
module.exports = palindromes;