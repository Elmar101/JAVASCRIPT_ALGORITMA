/*
*  Using the JavaScript language, have the function SimpleSymbols(str) take the str    *
*  parameter being passed and determine if it is an acceptable sequence by either      *
*  returning the string true or false. The str parameter will be composed of + and =   *
*  symbols with several letters between them (ie. ++d+===+c++==a) and for the string   *
*  to be true each letter must be surrounded by a + symbol. So the string to the left  *
*  would be false. The string will not be empty and will have at least one letter.
*/

function simpleSymbols(str) {
  for (let i = 0; i < str.length; i++) {
    if (str[i].match(/[a-z]/i) && (str[i-1] !== '+' || str[i+1] !== '+')) {
      return false;
    }
  }
  return true;
}
console.log(simpleSymbols("++d+===+c++==a")); // false
console.log(simpleSymbols("+a+")); // true
console.log(simpleSymbols("+a++")); // true
console.log(simpleSymbols("a+")); // false
console.log(simpleSymbols("a")); // false
console.log(simpleSymbols("+a")); // false
console.log(simpleSymbols("a+==b")); // false
console.log(simpleSymbols("a+==+b")); // false

function simpleSymbols2(str) {
   const arr = str.split('');
   const result = [];
   arr.forEach(element => {
     if (element.match(/[a-z]/i)) {
       if (arr[arr.indexOf(element) - 1] === '+' && arr[arr.indexOf(element) + 1] === '+') {
        result.push(true);
      } else {
        result.push(false);
      }
     }
   });
    return result.includes(false) ? false : true;
}
console.log("-----simpleSymbols2--------"); 

console.log(simpleSymbols2("++d+===+c++==a")); // false
console.log(simpleSymbols2("+a+")); // true
console.log(simpleSymbols2("+a++")); // true
console.log(simpleSymbols2("a+")); // false
console.log(simpleSymbols2("a")); // false
console.log(simpleSymbols2("+a")); // false
console.log(simpleSymbols2("a+==b")); // false
console.log(simpleSymbols2("a+==+b")); // false
