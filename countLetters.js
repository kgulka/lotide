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

//countLetters function receives a string and then returns a count of each
//letter that's in that string.
//output an object that has the letters as keys(params) and the count for each as the key value.

const countLetters = function(sentence) {
  const letterCounts = {};
  //go through the string and add each letter once to the ouptut object
  for (let letter of sentence) {
    //edge case - ignore spaces.
    if (letter === ' ')
      continue;
    if (!letterCounts[letter])
      letterCounts[letter] = 1;
    else
      letterCounts[letter] += 1;
  }
  return letterCounts;
};

//Test Code
console.log(countLetters("lighthouse in the house"));
assertEqual("Lighthouse Labs", "Bootcamp");

//assertEqual(1,1);