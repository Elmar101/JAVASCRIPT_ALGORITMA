/*
Return the number (count) of vowels in the given string.
We will consider a, e, i, o, u as vowels for this Kata (but not y).
The input string will only consist of lower case letters and/or spaces.
*/

function getCount(str) {
    let count = 0;
    const newStr = str.toLowerCase();
    for (const element of newStr) {
        if (element == "a" || element == "e" || element == "i" || element == "o" || element == "u") {
            count++;
        }
    }
    return count;
}

console.log(getCount("abracadabra")); // 5
console.log(getCount("hello")); // 2
console.log(getCount("hello world")); // 3

function getCount1(str) {
    return str.toLowerCase().replace(/[^aeiou]/g, "").length;
}
console.log("----------------");
console.log(getCount1("abracadabra")); // 5
console.log(getCount1("hello")); // 2
console.log(getCount1("hello world")); // 3