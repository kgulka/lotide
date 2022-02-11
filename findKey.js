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

//create a function findkey that takes in an object and a call back.
// it scans the oject an returns the first key with a truth value for the
//callback.
//if no key is found then return undefined.
//input: object and a callback function
//output: key value or undefined if not found.

const findKey = function(obj, callback) {
  for (let key in obj) {
    if (callback(obj[key])) return key;
  }
  return undefined;
};


const object1 = {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
};

assertEqual("noma", findKey(object1, x=>x.stars === 2));
assertEqual(findKey(object1, x=>x.stars !== 2), "Blue Hill");
assertEqual(findKey(object1, x=>x.stars === 5), undefined);