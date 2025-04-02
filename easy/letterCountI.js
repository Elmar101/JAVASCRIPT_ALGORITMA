/*
 *                                                                                      *
 *  Letter Count I                                                                      *
 *  Have the function letterCountI(str) take the str parameter being passed and return  *
 *  the first word with the greatest number of repeated letters. For example:           *
 *  "Today, is the greatest day ever!" should return greatest because it has 2 e's      *
 *  (and 2 t's) and it comes before ever which also has 2 e's. If there are no words    *
 *  with repeating letters return <b>-1</b>. Words will be separated by spaces.         *
 */

function letterCountI(str) {
  const arr = str
    .replace(/a-zA-Z /g, "")
    .toLowerCase()
    .split(" ");
  let max = 0;
  let maxWord = "";
  for (const element of arr) {
    let count = 1;

    for (let j = 0; j < element.length; j++) {
      for (let k = j + 1; k < element.length; k++) {
        if (element[j] == element[k]) {
          count++;
        }
      }
    }

    if (count > max) {
      max = count;
      maxWord = element;
    }
  }
  return max > 1 ? maxWord : -1;
}

console.log(letterCountI("Today, is the greatest day ever!")); // greatest
console.log(letterCountI("Hello apple pie")); // Hello
console.log(letterCountI("No words")); // -1
console.log("-------------------------------------------------");

function letterCountI1(str) {
  const arr = str
    .replace(/a-zA-Z /g, "")
    .toLowerCase()
    .split(" ");
  const wordObjects = [];
  arr.forEach((element) => {
    const obj = {};
    for (const char of element) {
      if (obj[char]) {
        obj[char]++;
      } else {
        obj[char] = 1;
      }
    }
    wordObjects.push(obj);
  });
  let maxCount = 0;
  let word = "-1";
  for (const obj of wordObjects) {
    if (maxCount < Math.max(...Object.values(obj))) {
      maxCount = Math.max(...Object.values(obj));
      word = arr[wordObjects.indexOf(obj)];
    }
  }
  return maxCount > 1 ? word : -1;
}

console.log(letterCountI1("Today, is the greatest day ever!")); // greatest
console.log(letterCountI1("Hello apple pie")); // Hello
console.log(letterCountI1("No words")); // -1

console.log("-------------------------------------------------");

function letterCountI2(str) {
  const arr = str
    .replace(/a-zA-Z /g, "")
    .toLowerCase()
    .split(" ");
  const wordObjects = [];
  arr.forEach((element) => {
    const obj = {};
    for (const char of element) {
      if (obj[char]) {
        obj[char]++;
      } else {
        obj[char] = 1;
      }
    }
    wordObjects.push(obj);
  });       

  const maxCount = Math.max(...wordObjects.map((obj) => Math.max(...Object.values(obj))));
  
  const word = arr[wordObjects.findIndex((obj) => Math.max(...Object.values(obj)) === maxCount)];
  return maxCount > 1 ? word : -1;
}

console.log(letterCountI2("Today, is the greatest day ever!")); // greatest 
console.log(letterCountI2("Hello apple pie")); // Hello 
console.log(letterCountI2("No words")); // -1 
