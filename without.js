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

const without = function(source, itemsToRemove) {

  let arrOut = source;
  for (let i = 0; i < itemsToRemove.length; i++)
    arrOut = removeFromArray(arrOut,itemsToRemove[i]);
  return arrOut;
};

const removeFromArray = function(aO, strValue) {
  let returnArray = [];
  //given an array find a value in it
  for (let i = 0; i < aO.length; i++) {
    if (aO[i] !== strValue) {
      console.log("additem", aO[i]);
      returnArray.push(aO[i]);
    }
  }
  return returnArray;
};
  //remove the value from the array


//Test Code

const words = ["hello", "world", "lighthouse"];
console.log("newArr",without(words, ["lighthouse"]));
assertArraysEqual(words, ["hello", "world", "lighthouse"]);

const nums = [1, 2, 3, 4, 5, 3, 6, 7];
const nums2 = without(nums, [1, 3, 5, 7]);
console.log("newArr2",nums2);

assertArraysEqual(nums2, [2, 4, 6]);
assertArraysEqual(nums, [1, 2, 3, 4, 5, 3, 6, 7]);
assertArraysEqual([1, 2, 3], [1, "2", 3]);

assertArraysEqual([1, 2, 3], [2, 2, 3]);
