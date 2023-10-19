const fibonacci = function(input) {
    let sequence = [];
    let counter = 0;
    for(let i = 0; i < input; i++) {
        if(i === 0) {
            sequence[i] = 1;
            counter++;
        } else {
            sequence[i] = counter + sequence[i - 1];
            counter++;
        }
    }
};

// Do not edit below this line
module.exports = fibonacci;

/*
function that takes an int as input 
    create an empty array
    loop adding elements to array for the length of input int
        make the element equal to     
*/