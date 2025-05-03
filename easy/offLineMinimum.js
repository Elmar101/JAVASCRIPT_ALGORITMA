/*
*  OffLine Minimum                                                                     *
*  Using the JavaScript language, have the function OffLineMinimum(strArr) take the    *
*  strArr parameter being passed which will be an array of integers ranging from       *
*  1...n and the letter "E" and return the correct subset based on the following       *
*  rules. The input will be in the following format: ["I","I","E","I",...,"E",...,"I"] *
*  where the I's stand for integers and the E means take out the smallest integer      *
*  currently in the whole set. When finished, your program should return that new set  *
*  with integers separated by commas. For example: if strArr is                        *
*  ["5","4","6","E","1","7","E","E","3","2"] then your program should return 4,1,5.    *   
*/

function offLineMinimum(strArr) { 
  const [last_index_E, freq_E] = E_Info(strArr);
  return strArr.slice(0, last_index_E +1).filter(Number).sort((a, b) => a - b).splice(0, freq_E)
}

function E_Info(strArr) {
    let index = 0;
    let freq = 0;
    for (let i = 0; i < strArr.length; i++) {
        if (strArr[i] === "E") {
            index = i;
            freq++;
        }
    }
    return [index, freq];
}
console.log("----0-----")
console.log(offLineMinimum(["5","4","6","E","1","7","E","E","3","2"])); // 4,1,5

