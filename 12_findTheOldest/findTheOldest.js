const findTheOldest = function(arr) {
    let sortedAge = arr.sort(function(a, b) {
        let last;
        let next;
        if ("yearOfDeath" in a) {
            last = a.yearOfDeath - a.yearOfBirth;
        } else {
            last = ((new Date()).getFullYear()) - a.yearOfBirth;
        }
        if ("yearOfDeath" in b) {
            next = b.yearOfDeath - b.yearOfBirth;
        } else {
            next = ((new Date()).getFullYear()) - b.yearOfBirth;
        }
        return last > next ? -1 : 1;
    });
    return sortedAge[0];
};

// Do not edit below this line
module.exports = findTheOldest;

/*
 function that takes an array as an input
    each object in the array
        subtract birth from death year to get age
    return object with the highest age
 */