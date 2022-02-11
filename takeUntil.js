
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


//Inputs: an array and a callback function.
//outputs: an array that contains the elements from
//          the input array until the callback returns a truthy value.
//the callback will only have one parm the array element.

const takeUntil = function(array, callback) {
  const result = [];
  for (let elem in array) {
    if (callback(array[elem])) return result;
    result.push(array[elem]);
  }
};


//tests
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
//const results1 = takeUntil(data1, x => x < 0);
//console.log(results1);

//console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
//const results2 = takeUntil(data2, x => x === ',');
//console.log(results2);

assertArraysEqual([ 1, 2, 5, 7, 2 ], takeUntil(data1, x => x < 0));
assertArraysEqual([ 'I\'ve', 'been', 'to', 'Hollywood' ], takeUntil(data2, x => x === ','));