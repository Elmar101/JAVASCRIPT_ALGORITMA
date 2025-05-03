function numberAddition(str) {
  const arr = str.split("");
  const newArr = [];
  arr.forEach((char) => {
    const lastItemFromNumChars = newArr.length - 1;
    if (/[0-9]/.test(char) && /[0-9]/.test(newArr[lastItemFromNumChars])) {
      newArr[lastItemFromNumChars] += char;
    } else newArr.push(char);
  });

  return newArr.reduce((acc, curr) => {
    if (/\d/.test(curr)) {
      return acc + parseInt(curr);
    }
    return acc;
  }, 0);
}
console.log("--------0---------");
console.log(numberAddition("88Hello 3World!")); // 91
console.log(numberAddition("Hel6lo4 . 5 55")); //70

function numberAddition1(str) {
  let tot = 0;

  str = str.replace(/[^0-9]+/g, " ").split(" ");
  for (const element of str) {
    tot += Number(element);
  }

  return tot;
}
console.log("---------1--------");
console.log(numberAddition1("88Hello 3World!")); // 91
console.log(numberAddition1("Hel6lo4 . 5 55")); //70

function numberAddition2(str) {
  return str
    .split(/\D+/)
    .map(Number)
    .reduce((acc, curr) => acc + curr, 0);
}
console.log("---------2--------");
console.log(numberAddition2("88Hello 3World!")); // 91
console.log(numberAddition2("Hel6lo4 5 55")); //70

function numberAddition3(str) {
  return str
    .match(/\d+/g)
    .map(Number)
    .reduce((acc, curr) => acc + curr, 0);
}
console.log("---------3--------");
console.log(numberAddition3("88Hello 3World!")); // 91
console.log(numberAddition3("Hel6lo4 5 55")); //70

function numberAddition4(str) {
  const arr = str.split("");
  const numberArr = [];
  for (const element of arr) {
    const lastItemFromNumberArr = numberArr.length - 1;

    if (/[^0-9]/.test(element)) {
      numberArr.push(element);
    } else if (numberArr.length === 0) {
      numberArr.push(element);
    } else if (/[0-9]/.test(numberArr[lastItemFromNumberArr])) {
      numberArr[lastItemFromNumberArr] += element;
    } else if (/[^0-9]/.test(numberArr[lastItemFromNumberArr])) {
      numberArr.push(element);
    }
  }

  return numberArr.reduce((acc, curr) => {
    if (/\d/.test(curr)) {
      return acc + parseInt(curr);
    }
    return acc;
  }, 0);
}

console.log("---------4--------");
console.log(numberAddition4("88Hello 3World!")); // 91
console.log(numberAddition4("Hel6lo4 5 55")); //70




function numberAddition5(str) {
    const arr = str.split("");
    const numberArr = [];
    for (const element of arr) {
      const lastItemFromNumberArr = numberArr.length - 1;
  
      if (/[^0-9]/.test(element) || !numberAddition.length || /[^0-9]/.test(numberArr[lastItemFromNumberArr])) {
        numberArr.push(element);
      } else {
        numberArr[lastItemFromNumberArr] += element;
      } 
    }
  
    return numberArr.reduce((acc, curr) => {
      if (/\d/.test(curr)) {
        return acc + parseInt(curr);
      }
      return acc;
    }, 0);
  }
  
  console.log("---------5--------");
  console.log(numberAddition5("88Hello 3World!")); // 91
  console.log(numberAddition5("Hel6lo4 5 55")); //70
