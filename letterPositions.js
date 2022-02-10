
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

const letterPositions = function(sentence) {
  const results = {};
  //go through the string and add each letter once to the ouptut object
  for (let i = 0; i < sentence.length; i++) {
    //edge case - ignore spaces.
    if (sentence[i] === ' ')
      continue;
    if (!results[sentence[i]])
      results[sentence[i]] = [i];
    else
      results[sentence[i]].push(i);
  }
  return results;
};


//
//Test Code

assertArraysEqual(letterPositions("lighthouse in the house").i, [1, 11]);

assertArraysEqual(letterPositions("lighthouse in the house").e, [9,16,22]);
//assertArraysEqual([1, 2, 3], [1, "2", 3]);

//assertArraysEqual([1, 2, 3], [2, 2, 3]);

