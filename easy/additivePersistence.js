/*
*                                                                                      *
*  Additive Persistence                                                                *
*  Using the JavaScript language, have the function AdditivePersistence(num) take the  *
*  num parameter being passed which will always be a positive integer and return its   *
*  additive persistence which is the number of times you must add the digits in num    *
*  until you reach a single digit. For example: if num is 2718 then your program       *
*  should return 2 because 2 + 7 + 1 + 8 = 18 and 1 + 8 = 9 and you stop at 9.         *  
*/

function additivePersistence(num) {
    let count = 0;
    while (num >= 10) {
        num = num.toString().split('').reduce((sum, digit) => sum + parseInt(digit), 0);
        count++;
    }
    return count;
}
console.log("--------0--------"); // 
console.log(additivePersistence(2718)); // 2
console.log(additivePersistence(4)); // 0

function testAdditivePersistence1(num) {
   if (num < 10) return 0;
   let count = 1;
   let sum = sumDigits(num);
   while (sum > 9) {
       count++;
       sum = sumDigits(sum);
   }
   return count;
}

function sumDigits(num) {
   let sum = 0;
   while (num > 0) {
       sum += num % 10;
       num = Math.floor(num / 10);
   }
   return sum;
}
console.log("--------1--------"); // 
console.log(testAdditivePersistence1(2718)); // 2
console.log(testAdditivePersistence1(4)); // 0

function testAdditivePersistence2(num) {
    if (num < 10) return 0;
    const arr = num.toString().split('').map(Number);
    let count = 1;
    let sum = sumDigits(arr);
    while (sum > 9) {
        count++;
        sum = sumDigits(sum);
    }
    return count;
 }
 
 function sumDigits2(arr) {
    let sum = 0;
   for (const element of arr) {
       sum += element;
    }
    return sum;
 }
 console.log("--------2--------"); // 
 console.log(testAdditivePersistence1(2718)); // 2
 console.log(testAdditivePersistence1(4)); // 0
