function rotateArray(arr, k) {
  // newArray is empty array; arrIndex is the index of original array and newIndex is index of the new array.
  const newArray = [];
  let arrIndex = 0;
  // % returns the remainder of quotient
  let newIndex = k % arr.length

  while (arrIndex < arr.length) {
    newArray[newIndex] = arr[arrIndex];
    arrIndex++;
    newIndex++;
    // reset the newIndex back to 0 when the length of the array is less than the value of newIndex.
    if (newIndex >= arr.length) {
      newIndex = 0;
    }
  }
  return newArray
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: [4, 1, 2, 3]");
  console.log("=>", rotateArray([1, 2, 3, 4], 1));

  console.log("");

  console.log("Expecting: [2, 3, 1]");
  console.log("=>", rotateArray([1, 2, 3], 2));

  console.log("");

  console.log("Expecting: [1, 2, 3]");
  console.log("=>", rotateArray([1, 2, 3], 3));
}

module.exports = rotateArray;

// Please add your pseudocode to this file
// And a written explanation of your solution
