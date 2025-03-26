/*
 * Have the function alphabetSoup(str) take the str string parameter being passed and return the string with the letters in alphabetical order (ie. hello becomes ehllo). 
 * Assume numbers and punctuation symbols will not be included in the string. 
*/

function alphabetSoup(str) {
  return str.replace(/[^a-zA-Z]/g, "").split("").sort().join("");
}

console.log(alphabetSoup("hello")); // ehllo
console.log(alphabetSoup("coderbyte")); // bcdeeorty

function alphabetSoup1(str) {
    const arr = [];
    for (const element of str) {
      arr.push(element);
    }
    arr.sort((a, b) => a.charCodeAt() - b.charCodeAt());
    return arr.join('');
}

console.log(alphabetSoup1("hello")); // ehllo
console.log(alphabetSoup1("coderbyte")); // bcdeeorty
