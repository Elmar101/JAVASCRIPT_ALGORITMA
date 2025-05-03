/*
 * For this challenge you will determine if each number is greater than the sum of all previous elements in an array.
 * have the function Superincreasing(arr) take the array of numbers stored in arr and determine
 * if the array forms a super-increasing sequence where each element in the array is greater than the sum of all previous elements.
 * The array will only consist of positive integers. For example: if arr is [1, 3, 6, 13, 54]
 * then your program should return the string "true" because it forms a superincreasing sequence.
 * If a superincreasing sequence isn't formed, then your program should return the string "false"
 */

function superIncreasing(arr) {
  let sum = 0;
  let result = true;
  arr.forEach((element, index, arr) => {
    if (index === 0) {
      sum = element;
    } else {
      sum += element || 0;
      if (sum > element && index < arr.length - 1) {
        console.log(`sum: ${sum}, element: ${element}`);
        result = false;
        return;
      }
    }
  });
  return result;
}

console.log("-----------0---------------");
console.log(superIncreasing([1, 3, 6, 13, 54])); // Output: "true"
console.log(superIncreasing([1, 2, 3, 4, 5])); // Output: "false"
