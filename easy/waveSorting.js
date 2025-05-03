/*
For this challenge you will determine if numbers in an array can be sorted in a particular way.
have the function WaveSorting(arr) take the array of positive integers stored in arr and return the string true if the numbers can be arranged in a wave 
pattern: a1 > a2 < a3 > a4 < a5 > ..., otherwise return the string false. For example, if arr is: [0, 1, 2, 4, 1, 4], 
then a possible wave ordering of the numbers is: [2, 0, 4, 1, 4, 1]. So for this input your program should return the string true. 
The input array will always contain at least 2 elements. More examples are given below as sample test cases. 
*/

function waveSorting(arr) {
    const sortedArr = arr.sort((a, b) => a - b);
    const n = arr.length;
    const newArr = [];
    for (let i = 1; i < n; i += 2) {
        newArr.push(sortedArr[i]);
        newArr.push(sortedArr[i - 1]);
    }
    if (n % 2 !== 0) {
        newArr.push(sortedArr[n - 1]);
    }
    return newArr;
}

console.log(waveSorting([3, 6, 5, 10, 20, 7])); // [6, 3, 10, 5, 20, 7]
console.log(waveSorting([3, 6, 5, 10, 20, 7, 30])); // [6, 3, 10, 5, 20, 7]



