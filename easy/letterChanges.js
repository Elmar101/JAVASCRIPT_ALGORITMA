/*
  Using the JavaScript, have the function letterChanges(str) take the str parameter being passed and modify it using the following algorithm
  1. Replace every letter in the string with the letter following it in the alphabetic (ie c becomes d , z becomes a)
  2. The Capitalize every vowel in the new string (a, e, i, o, u) and modify finally return this modify string
*/

function letterChanges(str) {
  const newStr = str.toLowerCase().replace(/[a-z]/g, (char) => {
    if (char === 'z') return 'a';
    return String.fromCharCode(char.charCodeAt() + 1);
  }
  );
  return newStr.replace(/[aeiou]/g, (vowel) => vowel.toUpperCase());
};

console.log(letterChanges("Fun Time"));  // Gvo UjnF
console.log(letterChanges("hello*3"));  // Ifmmp*3

function letterChanges2(str) {
  const newStr = str.toLowerCase();
  const arr = newStr.split("");
  for (let i = 0; i < arr.length; i++) {
    if (/[^a-z]/.test(arr[i])) continue;
    arr[i] = newStr[i] === 'z' ? 'a' : String.fromCharCode(newStr.charCodeAt(i) + 1);
  }
  const replacedStr = arr.join("");
  return replacedStr.replace(/[aeiou]/g, (vowel) => vowel.toUpperCase());
};

console.log(letterChanges2("Fun Time"));  // Gvo UjnF
console.log(letterChanges2("hello*3"));  // Ifmmp*3

// console.log("a".charCodeAt()); // 97
// console.log("z".charCodeAt()); // 122
// console.log(String.fromCharCode(97)); // a
// console.log(String.fromCharCode(122)); // z
// console.log("abc".charCodeAt(0)); // 97
// console.log("abc".charCodeAt(1)); // 98
// console.log("abc".charCodeAt(2)); // 99
// console.log(String.fromCharCode(97, 98, 99)); // abc
// console.log(String.fromCharCode(122, 97, 98)); // zab