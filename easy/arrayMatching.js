/*
/***************************************************************************************
For this challenge you will add elements from two arrays in a particular order.
have the function arrayMatching(strArr) read the array of strings stored in strArr which will contain only two elements, 
both of which will represent an array of positive integers. For example: if strArr is ["[1, 2, 5, 6]", "[5, 2, 8, 11]"], 
then both elements in the input represent two integer arrays, and your goal for this challenge is to add the elements in corresponding 
locations from both arrays. For the example input, your program should do the following additions: [(1 + 5), (2 + 2), (5 + 8), (6 + 11)] 
which then equals [6, 4, 13, 17]. Your program should finally return this resulting array in a string format with each element separated 
by a hyphen: 6-4-13-17. If the two arrays do not have the same amount of elements, then simply append the remaining elements onto 
the new array(example shown below).Both arrays will be in the format : [e1, e2, e3, ...] where at least one element will exist in each array.
*/

function arrayMatching(strArr) {
  const arr1 = strArr[0].slice(1, -1).split(",").map(Number);
  const arr2 = strArr[1].slice(1, -1).split(",").map(Number);
  const maxLength = Math.max(arr1.length, arr2.length);
  const result = [];
  for (let i = 0; i < maxLength; i++) {
    const num1 = arr1[i] || 0;
    const num2 = arr2[i] || 0;
    result.push(num1 + num2);
  }
  return `[${result.join("-")}]`;
}

console.log(arrayMatching(["[1, 2, 5, 66]", "[5, 2, 8, 11, 22]"])); // [6-4-13-77-22]
console.log(arrayMatching(["[1, 2, 5, 66, 77]", "[5, 2, 8, 11, 22, 77]"])); // [6-4-13-77-22]

function arrayMatching1(strArr) {
  const newArr1 = strArr[0]
    .replace(/[^\d,]/g, "")
    .split(",")
    .map(Number);
  const newArr2 = strArr[1].match(/(\d+)/g).map(Number);
  const result = [];
  const longArr = newArr1.length >= newArr2.length ? newArr1 : newArr2;
  for (let i = 0; i < longArr.length; i++) {
    if (newArr1[i] && newArr2[i]) {
      result.push(newArr1[i] + newArr2[i]);
    } else if (newArr1[i] !== undefined) {
      result.push(newArr1[i]);
    } else if (newArr2[i] !== undefined) {
      result.push(newArr2[i]);
    }
  }
  return `[${result.join("-")}]`;
}

console.log(arrayMatching1(["[1, 2, 5, 66]", "[5, 2, 8, 11, 22]"])); // [6-4-13-77-22]
console.log(arrayMatching1(["[1, 2, 5, 66, 77]", "[5, 2, 8, 11, 22, 77]"])); // [6-4-13-77-22]

