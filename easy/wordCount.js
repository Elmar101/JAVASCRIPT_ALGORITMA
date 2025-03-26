/*
*  Using the JavaScript language, have the function wordCount(str) take the str        *
*  string parameter being passed and return the number of words the string contains    *
*  (ie. "Never eat shredded wheat" would return 4). Words will be separated by single  *
*  spaces.    
*/

function wordCount(str) { 
  return str.trim().split(' ').length; 
}

console.log(wordCount(" Never eat  shredded wheat"));
console.log(wordCount("Hello World "));
console.log(wordCount(" one 22 three "));
console.log(wordCount("one ")); 

function wordCount1(str) {
    const arr = str.split(" ").filter((el) => el !== "");
    return arr.length;
}
console.log("----------------");
console.log(wordCount1(" Never eat  shredded wheat"));
console.log(wordCount1("Hello World "));
console.log(wordCount1(" one 22 three "));
console.log(wordCount1("one "));
    