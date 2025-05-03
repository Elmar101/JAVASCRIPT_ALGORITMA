/*
/***************************************************************************************
*                                                                                      *
*  Swap Case                                                                           *
*  Using the JavaScript language, have the function SwapCase(str) take the str         *
*  parameter and swap the case of each character. For example: if str is "Hello World" *
*  the output should be hELLO wORLD. Let numbers and symbols stay the way they are.    *  
*/

function swapCase(str) {
  return str
    .split("")
    .map((char) =>
      char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase()
    )
    .join("");
}

console.log(swapCase("Hello World87")); // hELLO wORLD

function swapCase1(str) {
  const newArr = [];
  const arr = str.split("");
  for (const element of arr) {
    if (/[^a-zA-Z]/.test(element)) {
      newArr.push(element);
    } else if (element === element.toUpperCase()) {
      newArr.push(element.toLowerCase());
    } else {
      newArr.push(element.toUpperCase());
    }
  }
  return newArr.join("");
}
console.log(swapCase1("Hello World87")); // hELLO wORLD

function swapCase2(str) {
  const newArr = [];
  const arr = str.split("");
  for (const element of arr) {
    if (/[^a-zA-Z]/.test(element)) {
      newArr.push(element);
    } else
      newArr.push(
        /[A-Z]/.test(element) ? element.toLowerCase() : element.toUpperCase()
      );
  }
  return newArr.join("");
}

console.log(swapCase2("Hello World87")); // hELLO wORLD
