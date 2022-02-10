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
//the funciton findKeyByValue recieves an object and a value.
// it scans the object and returns the first key that contains the given value.
// if no key with that value is found then return undefined.

const findKeyByValue = function(objIn, valIn) {
  for (let objKey in objIn) {
    if (objIn[objKey] === valIn) {
      return objKey;
    }
  }
  return undefined;
};

//tests

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};


assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);