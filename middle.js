const middle = function(arrIn) {
  //return the middle of an array.
  //this means a single element in an odd numbered array or
  //two elements in an even numbered array.
  let arrOut = [];
  //edge case
  //If there are only one or two elements in the array return an empty array.
  if (arrIn.length < 3) {
    return arrOut;
  }
  //even numbered array
  if (arrIn.length % 2 === 0) {
    arrOut.push(arrIn[arrIn.length / 2 - 1], arrIn[arrIn.length / 2]);
    return arrOut;
  }
  //odd numbered array
  //console.log("odd mid value:", arrIn[Math.trunc(arrIn.length/2)] )
  if (arrIn.length % 2 === 1) {
    arrOut.push(arrIn[Math.trunc(arrIn.length / 2)]);
    return arrOut;
  }
  
  return arrOut;
};

module.exports = middle;

