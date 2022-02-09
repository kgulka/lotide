//Function assertEqual
const assertEqual = function(actual, expected) {
  const emoji = require('node-emoji');
  const pass = emoji.get('smiley');
  const fail = emoji.get('🛑');
  
  if (actual === expected) {
    console.log(`${pass} Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`${fail} Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length)
    return false;
  for (let i = 0; i < arr1.length; i++) {
    if ((arr1[i] !== arr2[i])) {
      return false;
    }
  }
  return true;
};


//Test Code



assertEqual("Lighthouse Labs", "Bootcamp");

assertEqual(1,1);
 
console.log("test1:", eqArrays([1,2,3], [1,2,3]));

console.log("test2:", eqArrays([1,2,3], [2,2,3]));

console.log("test3:", eqArrays([1,2,3], [1,2,"3"]));

console.log("test4:", eqArrays([1,2,"3"], [1,2,"3"]));

console.log("test5:");
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);