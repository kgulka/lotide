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

const middle = function(arrIn) {
  //return the middle of an array.
  //this means a single element in an odd numbered array or
  //two elements in an even numbered array.
  let arrOut = [];
  //edge case
  //If there are only one or two elements in the array return an empty array.
  if (arrIn.length < 3) {
    return arrOut;
  }
  //even numbered array
  if (arrIn.length % 2 === 0) {
    arrOut.push(arrIn[arrIn.length / 2 - 1], arrIn[arrIn.length / 2]);
    return arrOut;
  }
  //odd numbered array
  //console.log("odd mid value:", arrIn[Math.trunc(arrIn.length/2)] )
  if (arrIn.length % 2 === 1) {
    arrOut.push(arrIn[Math.trunc(arrIn.length / 2)]);
    return arrOut;
  }
  
  return arrOut;
};

//Test Code
//console.log("1st test:",middle([1, 2, 3]));

assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);

assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);

assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);

