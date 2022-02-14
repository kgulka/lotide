const assertEqual = require('../assertEqual');
const eqArrays  = require('../eqArrays');

//Test Code

assertEqual("Lighthouse Labs", "Bootcamp");

assertEqual(1,1);
 
console.log("test1:", eqArrays([1,2,3], [1,2,3]));

console.log("test2:", eqArrays([1,2,3], [2,2,3]));

console.log("test3:", eqArrays([1,2,3], [1,2,"3"]));

console.log("test4:", eqArrays([1,2,"3"], [1,2,"3"]));

console.log("test5:");
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);