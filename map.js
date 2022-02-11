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

const assertArraysEqual = function(actual, expected) {
  const emoji = require('node-emoji');
  const pass = emoji.get('smiley');
  const fail = emoji.get('🛑');
  
  if (eqArrays(actual, expected)) {
    console.log(`${pass} Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`${fail} Assertion Failed: ${actual} !== ${expected}`);
  }
};

//create a map function
//Inputs: an array, a callback function
//Outputs: return a new array of the results of the callback function

const map = function(array, callback) {
  const results = [];
  for (let elem of array) {
    results.push(callback(elem));
  }
  return results;
}

const words = ['ground', 'control', 'to', 'major', 'tom'];
const results1 = map(words, word => word.toUpperCase());
console.log('results:', results1);




//Test Code

assertArraysEqual( ['GROUND', 'CONTROL', 'TO', 'MAJOR', 'TOM' ], map(words, word => word.toUpperCase()));
const words2 = ["to"];
assertArraysEqual(["TO"], map(words2, word => word.toUpperCase()));

assertArraysEqual([], map([], word => word.toUpperCase()));