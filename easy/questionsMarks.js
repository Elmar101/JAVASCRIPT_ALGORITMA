/*
  Have the function questionsMarks(str) take the str string parameter, which will contain single digit numbers, letters, and question marks, 
  and check if there are exactly 3 question marks between every pair of two numbers that add up to 10. 
  If so, then your program should return the string true, otherwise it should return the string false. 
  If there are not two numbers that add up to 10 in the string, then your program should return false as well. 

  for example:  questionsMarks("aa6?9") false 
  questionsMarks("acc?7??sss?3rr1??????5") should return true.
  questionsMarks("5??aaaaaaaaaaaaaaaaaaa?5?5") should return false.
  questionsMarks("9???1???9???1???9") should return false.
*/

function questionsMarks(str) { 
  if(str.length < 5) return false;
  const newStr = str.replace(/[^0-9?]/g, "");
  const sums = [];
  let sum = 0;
  for (let i = 0; i < newStr.length; i++) {
    if(newStr[i] != '?') {
      sum = +newStr[i] + +newStr[i+4];
      sums.push(sum);
    }
  }
  return sums.some((sum) => sum === 10);  
}

// questionsMarks("aa6?9"); // false
console.log(questionsMarks("acc?7??sss?3rr1??????5")); // true
// questionsMarks("5??aaaaaaaaaaaaaaaaaaa?5?5"); // false
// questionsMarks("9???1???9???1???9"); // false

function questionsMarks2(str) { 
  if(str.length < 5) return false;
  const newStr = str.replace(/[^0-9?]/g, "");
  const regex = /\d\?{3}\d/g;
  if(!newStr.match(regex)) return false;

  const arr = newStr.split("");
  const sums = [];
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if(arr[i] != '?') {
      sum = +arr[i] + +arr[i+4];
      sums.push(sum);
    }
  }
  return sums.some((sum) => sum === 10);  
}
console.log(questionsMarks2("acc?7??sss?3rr1??????5")); 

function questionsMarks3(str) { 
  if(str.length < 5) return false;
  const newStr = str.replace(/[^0-9?]/g, "");
  const regex = /\d\?{3}\d/g;
  if(!newStr.match(regex)) return false;
  const sums = [];
  let sum = 0;
  for (let i = 0; i < newStr.length; i++) {
    if(newStr[i] != '?' && newStr.substring(i+1,i+4) == '???') {
      sum = +newStr[i] + +newStr[i+4];
      sums.push(sum);
    }
  }
  return sums.some((sum) => sum === 10);  
}
console.log(questionsMarks3("acc?7??sss?3rr1??????5???8")); 


function questionsMarks4(str) { 
  if(str.length < 5) return false;
  const newStr = str.replace(/[^0-9?]/g, "");
  const regex = /\d\?{3}\d/g;
  const arr = newStr.match(regex)
  if(!arr.length) return false;
  const sums = [];
  let sum = 0;
  for(const element of arr) {
    sum = +element[0] + +element[4];
    sums.push(sum);
  }
  return sums.some((sum) => sum === 10);  
}
console.log(questionsMarks4("acc?7??sss?3rr1??????5???8")); 

function questionsMarks5(str) { 
  if(str.length < 5) return false;
  const newStr = str.replace(/[^0-9?]/g, "");
  const regex = /\d\?{3}\d/g;
  const arr = newStr.match(regex)
  if(!arr.length) return false
  return arr.some((element) => +element[0] + +element[4] === 10); 
}
console.log(questionsMarks5("acc?7??sss?3rr1??????5???8")); 