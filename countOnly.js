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

//countonly function
//takes in an array of elements and an object showing which eleements to count in that list
//it returns an object showing the count total for each element type in the count object.
const countOnly = function(allItems, itemsToCount) {
  const results = {};
  for (const item of allItems) {
    // add check to see if the element should be counted
    if (!itemsToCount[item])
      continue;
      
    if (!results[item]) {
      results[item] = 0;
    }
    results[item] += 1;
  }
  return results;
};

const firstNames = ["Karl", 'Salima', "Agouhanna", "Fang", "Kavith", "Jason", "Salima", "Fang", "Joe"];
const result1 = countOnly(firstNames, {"Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

console.log(result1);

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);

