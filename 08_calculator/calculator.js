const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
  return arr.reduce((total, current) => total + current, 0);
};

const multiply = function(arr) {
  return arr.reduce((total, current) => total * current, 1);
}
const power = function(a, b) {
	let arr = [];
  for (let i = 0; i < b; i++) {
    arr.push(a);
  }
  return multiply(arr);
};

const factorial = function(num) {
  if (num === 0) { 
    return 1;
  } else {
    let arr = [];
    let arrCounter = num;

    for (let i = 0; i < num; i++) {
      arr.push(arrCounter);
      arrCounter--;
    }
    
    return arr.reduce((total, current) => total * current, 1);
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
