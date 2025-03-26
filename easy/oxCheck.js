/*
 *  Ex OX                                                                               *
 *  Using the JavaScript language, have the function ExOh(str) take the str parameter   *
 *  being passed and return the string true if there is an equal number of x's and o's, *
 *  otherwise return the string false. Only these two letters will be entered in the    *
 *  string, no punctuation or numbers. For example: if str is "xooxxxxooxo" then the    *
 *  output should return false because there are 6 x's and 5 o's.
 */

function exCheck(str) {
  const x = str.match(/x/gi);
  const o = str.match(/o/gi);
  return x?.length === o?.length;
}
console.log("----------------");
console.log(exCheck("xooxxxxooxo")); // false
console.log(exCheck("x")); // false
console.log(exCheck("o")); // false
console.log(exCheck("xoxoxoxoxoxoxoxoxoxo")); // true

function exCheck1(str) {
  const arr = str.split(""); // [...str]; => izahi stringi arreye cevirmenin yollari 
  const xCount = arr.filter((el) => el === "x").length;
  const oCount = arr.filter((el) => el === "o").length;

  return xCount === oCount;
}
console.log("----------------");
console.log(exCheck1("xooxxxxooxo")); // false
console.log(exCheck1("x")); // false
console.log(exCheck1("o")); // false
console.log(exCheck1("xoxoxoxoxoxoxoxoxoxo")); // true

function exCheck2(str) {
    let xCount = 0;
    let oCount = 0;
    for (const element of str) {
        if (element === "x") {
            xCount++;
        } else if (element === "o") {
            oCount++;
        }
    }
    return xCount === oCount;
}
console.log("----------------");
console.log(oxCheck("xoxoxx")); // false
console.log(exCheck2("x")); // false
console.log(exCheck2("o")); // false
console.log(exCheck2("xoxoxoxoxoxoxoxoxoxo")); // true

function oxCheck(str) {
    return str.split("x").length === str.split("o").length;
}       
console.log("----------------");
console.log(oxCheck("xoxoxx")); // false
console.log(oxCheck("x")); // false
console.log(oxCheck("o")); // false
console.log(oxCheck("xoxoxoxoxoxoxoxoxoxo")); // true

function exCheck4(str) {
    let xCount = 0;
    let oCount = 0;

    [...str].forEach((element) => {
        if (element === "x" || element === "o") {
            if (element === "x") {
              xCount++;
            } else {
              oCount++;
            }
        }
    }); 

    return xCount === oCount;
}
console.log("----------------");
console.log(exCheck4("xooxxxxooxo")); // false  
console.log(exCheck4("x")); // false
console.log(exCheck4("o")); // false
console.log(exCheck4("xoxoxoxoxoxoxoxoxoxo")); // true
