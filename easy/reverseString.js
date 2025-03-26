// Reverse a string

const str = "Hello World";
function reverseString(str) {
  return str.split("").reverse().join("");
}
console.log(reverseString(str));

function firstReverse(str) {
  const arr = str.split("");
  const newArr = [];
  for (let i = arr.length; i >= 0; i--) {
    newArr.push(arr[i]);
  }
  return newArr.join("");
}
console.log(firstReverse(str)); // dlroW olleH

function firstReverse1(str) {
  let temp = "";
  for (const element of str) {
    temp = element + temp;
  }
  return temp;
}
console.log(firstReverse1(str)); // dlroW olleH

function firstReverse2(str) {
  let newString = "";
  for (let i = str.length - 1; i >= 0; i--) {
    newString += str[i];
  }

  return newString;
}

console.log(firstReverse2(str)); // dlroW olleH

function firstReverse3(str) {
  const tomatoes = [];
  for (i = str.length - 1; i >= 0; i--) {
    tomatoes.push(str[i]);
  }
  str = tomatoes.join("");

  return str;
}
console.log(firstReverse3(str)); // dlroW olleH
