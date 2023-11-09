const removeFromArray = function(array, ...args) {
        return array.filter((elm) => !args.includes(elm));
};

// Do not edit below this line
module.exports = removeFromArray;
