const tail = require('../tail');
const assertEqual = require('../assertEqual');
const assert = require('chai').assert;

//Test Code

//assertEqual("Lighthouse Labs", "Bootcamp");

//assertEqual(1,1);
 

// Test Case: Check the original array
//const words = ["Yo Yo", "Lighthouse", "Labs"];
//tail(words); // no need to capture the return value since we are not checking it
//assertEqual(words.length, 3); // original array should still have 3 elements!

describe("#tail", () => {
  it("returns 2,3 for [1,2,3]", () => {
    assert.deepEqual(tail([1, 2, 3]),[2, 3]);
  });
  it("returns [] for [5]", () => {
    assert.deepEqual(tail([5]), []);
  });
  it("returns 'your, uncle' for ['bobs, your, uncle']", () => {
    assert.deepEqual(tail(['bobs', 'your', 'uncle']), ['your', 'uncle']);
  });
  it("returns 'Lighthouse', 'Labs' for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
  });
  it("still returns 3 for length of the orig array", () => {
    const words = ["Yo Yo", "Lighthouse", "Labs"];
    tail(words);
    assert.strictEqual(words.length, 3);
  });
  
});