/*
# Have the function ABCheck(str) take the str parameter being passed and return
# the string true if the characters a and b are separated by exactly 3 places
# anywhere in the string at least once (ie. "lane borrowed" would result in
# true because there is exactly three characters between a and b). Otherwise
# return the string false.
*/

function abCheck(str) {
  return /a...b/.test(str) || /b...a/.test(str);
}

console.log(abCheck("lane borrowed"));
console.log(abCheck("laneborrowed"));
console.log(abCheck("lane b orrowed"));

function abCheck1(str) {
  return str.search(/a...b/) !== -1 || str.search(/b...a/) !== -1;
}
console.log("----------------");
console.log(abCheck1("lane borrowed"));
console.log(abCheck1("laneborrowed"));
console.log(abCheck1("lane b orrowed"));

function abCheck2(str) {
  return /a.{3}b/.test(str) || /b.{3}a/.test(str);
}
console.log("----------------");
console.log(abCheck2("lane borrowed"));
console.log(abCheck2("laneborrowed"));
console.log(abCheck2("lane b orrowed"));

function abCheck3(str) {
  return str.match(/a.{3}b/) || str.match(/b.{3}a/) ? true : false;
}
console.log("----------------");
console.log(abCheck3("lane borrowed"));
console.log(abCheck3("laneborrowed"));
console.log(abCheck3("lane b orrowed"));

function abCheck4(str) {
  const arr = str.split("");
  const checking = [];
  for (let i = 0; i < arr.length; i++) {
    const isChecking = (arr[i] === "a" && arr[i + 4] === "b") || (arr[i] === "b" && arr[i + 4] === "a")
    checking.push(isChecking);
  }
  return checking.includes(true);
}
console.log("----------------");
console.log(abCheck4("lane borrowed"));
console.log(abCheck4("laneborrowed"));
console.log(abCheck4("lane b orrowed"));

function abCheck5(str) {
  return (
    str.includes("a") &&
    str.includes("b") &&
    (str.indexOf("a") + 3 === str.indexOf("b") ||
      str.indexOf("b") + 3 === str.indexOf("a"))
  );
}
console.log("----------------");
console.log(abCheck5("lane borrowed"));
console.log(abCheck5("laneborrowed"));
console.log(abCheck5("lane b orrowed"));

function abCheck6(str) {
  const arr = str.split("");
  const checking = [];
  arr.forEach((element, index) => {
    const isChecking =
      (element === "a" && arr[index + 4] === "b") ||
      (element === "b" && arr[index + 4] === "a");
    checking.push(isChecking);
  });
  return checking.includes(true);
}
console.log("----------------");
console.log(abCheck6("lane borrowed"));
console.log(abCheck6("laneborrowed"));
console.log(abCheck6("lane b orrowed"));

