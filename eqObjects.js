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

// given two objects this function compares them and
// returns true if they are the same or false if they are not.
// The are the same if they have the same number of keys and
//the value for each key in one object is the same
//as the value for that same key in the other object

const eqObjects = function(object1, object2) {
  //check for same number of keys
  if (Object.keys(object1).length !== Object.keys(object2).length) return false;
  //check for matching keys and values
  for (let key1 in object1) {
    //console.log("object1[key1]:",object1[key1]);
    //console.log(typeof object1[key1]);
    if (Array.isArray(object1[key1])) {
      return eqArrays(object1[key1],object2[key1]);
    } else {
      if (object1[key1] !== object2[key1]) {
        return false;
      }
    }
  }
  return true;
};

//Test Code

//const ab = { a: "1", b: "2" };
//const ba = { b: "2", a: "1" };
//const abc = { a: "1", b: "2", c: "3" };

const cd = { c: "1", d: ["2", 3]};
const dc = { d: ["2", 3], c: "1" };
const cd2 = { c: "1", d: ["2", 3, 4] };

console.log(eqObjects(cd, dc)); // => true
console.log(eqObjects(cd, cd2)); // => false

//console.log(eqObjects(ab, ba)); // => true
//console.log(eqObjects(ab, abc)); // => false
