/*
 *  Array Addition I                                                                    *
 *  Using the JavaScript language, have the function arrayAdditionI(arr) take the array *
 *  of numbers stored in arr and return the string true if any combination of numbers   *
 *  in the array can be added up to equal the largest number in the array, otherwise    *
 *  return the string false. For example: if arr contains [4, 6, 23, 10, 1, 3] the      *
 *  output should return true because 4 + 6 + 10 + 3 = 23. The array will not be empty, *
 *  will not contain all the same elements, and may contain negative numbers.
 */

function arrayAdditionI(arr) {
  const max = Math.max(...arr);
  arr.splice(arr.indexOf(max), 1);
  const sum = arr.reduce((acc, num) => acc + num, 0);
  return sum === max;
}

console.log(arrayAdditionI([4, 6, 23, 10, 1, 2])); // true
console.log(arrayAdditionI([5, 7, 16, 1, 2])); // false

function arrayAdditionI1(arr) {
  const max = Math.max(...arr);
  const newArr = arr.filter((num) => num !== max);
  const sum = newArr.reduce((acc, num) => acc + num, 0);
  return sum === max;
}
console.log("-------------------");
console.log(arrayAdditionI1([4, 6, 23, 10, 1, 2])); // true
console.log(arrayAdditionI1([5, 7, 16, 1, 2])); // false


function arrayAdditionI2(arr) {
  const max = arr.sort((a, b )=> a - b)[arr.length - 1];
  let sum = 0;
  for (let i = 0; i < arr.length-1; i++) {
    sum += arr[i];
  }
  return sum === max;
}

console.log("-------------------");
console.log(arrayAdditionI2([4, 6, 23, 10, 1, 2])); // true
console.log(arrayAdditionI2([5, 7, 16, 1, 2])); // false



function arrayAdditionI3(arr) {
  const max = arr.sort((a, b) => a - b)[arr.length - 1];
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if(arr[i] === max) {
      continue;
    }
    sum += arr[i];
  }
  return sum === max;
}

console.log("-------------------");
console.log(arrayAdditionI3([4, 6, 23, 10, 1, 2])); // true 
console.log(arrayAdditionI3([5, 7, 16, 1, 2])); // false

function arrayAdditionI4(numbers) {
  const largest = numbers.sort((a, b) => b - a)[0];
  const sum = numbers.reduce((total, num) => num === largest ? total : total + num, 0);
  return sum === largest;
}

console.log("-------------------");
console.log(arrayAdditionI4([4, 6, 23, 10, 1, 2])); // true 
console.log(arrayAdditionI4([5, 7, 16, 1, 2])); // false


function arrayAdditionI5(arr) {
  const max = Math.max(...arr); //find max number in array using Math.max(...arr) or arr.sort((a, b) => b - a)[0];  arr.sort((a, b) => a - b)[arr.length - 1];
  let sum = 0;
  for (const element of arr) {
    sum += element;
  }
  return sum / 2 === max;
}

console.log("-------------------");
console.log(arrayAdditionI5([4, 6, 23, 10, 1, 2])); // true 
console.log(arrayAdditionI5([5, 7, 16, 1, 2])); // false