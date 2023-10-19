const fibonacci = function(input) {
    let sequence = [];
    if (parseInt(input) < 0) return "OOPS";

    for(let i = 0; i < parseInt(input); i++) {
        if(i < 2) {
            sequence[i] = 1;
        }else {
            sequence[i] = sequence[i-1] + sequence[i - 2];
        }
        
    }
    
    return sequence[input-1];    
};

// Do not edit below this line
module.exports = fibonacci;

/*
function that takes an int as input 
    create an empty array
    loop while i is less than inputint
        array[i] = sum of array[i-1] and array[i-2]    
*/