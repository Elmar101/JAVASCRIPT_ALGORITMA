/*
/***************************************************************************************
* For this practice test you will determine the intersection between two sets.
* have the function OverlappingRanges(arr) take the array of numbers stored in 
* arr which will contain 5 positive integers, the first two representing a range of 
* numbers (a to b), the next 2 also representing another range of integers (c to d), 
* and a final 5th element (x) which will also be a positive integer, and 
* return the string true if both sets of ranges overlap by at least x numbers. 
* For example: if arr is [4, 10, 2, 6, 3] then your program should return the string true. 
* The first range of numbers are 4, 5, 6, 7, 8, 9, 10 and the second range of numbers are 2, 3, 4, 5, 6.
* The last element in the array is 3, and there are 3 numbers that overlap between both ranges: 4, 5, and 6. 
* If both ranges do not overlap by at least x numbers, then your program should return the string false. 
*/

function overlappingRanges(arr) {
    const firstSet = createArr(arr[0], arr[1]);
    const secondSet = createArr(arr[2], arr[3]);
    const intersectionArr = [];
    for (const firstItem of firstSet) {
        if(secondSet.indexOf(firstItem)>-1) {
            intersectionArr.push(firstItem);
        }
    }
    return intersectionArr.length >= arr[4];
}

function createArr(start, end) {
    const arr = [];
    for (let i = start; i <= end; i++) {
        arr.push(i);
    }
    return arr;
}
console.log("-----------0---------------");
console.log(overlappingRanges([4, 10, 2, 6, 3])); // Output: "true"
console.log(overlappingRanges([1, 5, 6, 10, 2])); // Output: "false"

function overlappingRanges1(arr) {
    const firstSet = createArr1(arr[0], arr[1]);
    const secondSet = createArr1(arr[2], arr[3]);
    const intersectionArr = firstSet.filter(item => secondSet.includes(item));
    return intersectionArr.length >= arr[4];
}

function createArr1(start, end) {
    const arr = [];
    for (let i = start; i <= end; i++) {
        arr.push(i);
    }
    return arr;
}

console.log("-----------1---------------");
console.log(overlappingRanges1([4, 10, 2, 6, 3])); // Output: "true"
console.log(overlappingRanges1([1, 5, 6, 10, 2])); // Output: "false"

