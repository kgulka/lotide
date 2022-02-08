//Function assertEqual
const assertEqual = function(actual, expected) {
  const emoji = require('node-emoji');
  const pass = emoji.get('smiley');
  const fail = emoji.get('🛑');
  
  if (actual === expected) {
    console.log(pass + " Assertion Passed: " + actual + " === " + expected);
  } else {
    console.log(fail + " Assertion Failed: " + actual + " !== " + expected);
  }
};

//Test Code

assertEqual("Lighthouse Labs", "Bootcamp");

assertEqual(1,1);
 