/*
 *                                                                                      *
 *  Dash Insert                                                                         *
 *  Using the JavaScript language, have the function dashInsert(str) insert dashes      *
 *  ('-') between each two odd numbers in str. For example: if str is 454793 the        *
 *  output should be 4547-9-3. Don't count zero as an odd number.                       *
 */

function dashInsert(str) {
  const newArr = [];
  for (let i = 0; i < str.length; i++) {
    if (/[^1-9]/.test(str[i])) {
      newArr.push(str[i]);
    } else if (
      str[i] % 2 !== 0 &&
      str[i + 1] % 2 !== 0 &&
      str[i + 1] !== undefined &&
      /[1-9]/.test(str[i + 1])
    ) {
      newArr.push(str[i], "-");
    } else {
      newArr.push(str[i]);
    }
  }
  return newArr.join("");
}

console.log(dashInsert("454793")); // 4547-9-3
console.log(dashInsert("454793c")); // 4547-9-3c
console.log(dashInsert("123456789")); // 123456789
