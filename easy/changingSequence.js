/*
/***************************************************************************************
* For this challenge you will determine when an array changes sequences.               *
* have the function ChangingSequence(arr) take the array of numbers stored in arr      *
* and return the index at which the numbers stop increasing and begin decreasing or    *
* stop decreasing and begin increasing. For example: if arr is [1, 2, 4, 6, 4, 3, 1]   *
* then your program should return 3 because 6 is the last point in the array where     *
* the numbers were increasing and the next number begins a decreasing sequence.        *
* The array will contain at least 3 numbers and it may contains only a single sequence,* 
* increasing or decreasing. If there is only a single sequence in the array,           *
* then your program should return -1. Indexing should begin with 0.                    *
*/

function changingSequence(arr) { 
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < arr[i + 1]) {
            for (let j = i + 1; j < arr.length; j++) {
                if (arr[j] > arr[j + 1]) {
                    return j;
                }
            }
        } else if (arr[i] > arr[i + 1]) {
            for (let j = i + 1; j < arr.length; j++) {
                if (arr[j] < arr[j + 1]) {
                    return j;
                }
            }
        }
    }
    return -1;
}
console.log("-----------0---------------");
console.log(changingSequence([1, 2, 4, 6, 4, 3, 1])); // Output: 3
console.log(changingSequence([1, 2, 3, 4, 5])); // Output: -1


function changingSequence2(arr) {
    let increasing = arr[1] > arr[0];
    for (let i = 1; i < arr.length - 1; i++) {
        if ((arr[i] < arr[i + 1]) !== increasing) {
            return i;
        }
    }
    return -1;
}
console.log("-----------2---------------");
console.log(changingSequence2([1, 2, 4, 6, 4, 3, 1])); // Output: 3
console.log(changingSequence2([1, 2, 3, 4, 5])); // Output: -1

function changingSequence3(arr) {
    let tendency = "increasing";
    let newArr = [];

    for (let i = 0; i < arr.length - 1; i++) {
       newArr.push(arr[i+1] - arr[i]) 
    }

    if (newArr[0] < 0) {
        tendency = "decreasing";
    }

    if(tendency === "increasing") {
        for (let i = 0; i < newArr.length; i++) {
            if (newArr[i] < 0) {
                return i;
            }
        }
    }
    else {
        for (let i = 0; i < newArr.length; i++) {
            if (newArr[i] > 0) {
                return i;
            }
        }
    }
    return -1;
}

console.log("-----------3---------------");
console.log(changingSequence3([1, 2, 4, 6, 4, 3, 1])); // Output: 3
console.log(changingSequence3([1, 2, 3, 4, 5])); // Output: -1
