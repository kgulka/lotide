const assertArraysEqual = require('../assertArraysEqual');

//Test Code

assertArraysEqual([1, 2, 3], [1, 2, 3]);

assertArraysEqual([1, 2, 3], [1, "2", 3]);

assertArraysEqual([1, 2, 3], [2, 2, 3]);