/*
 Have the function findIntersection(strArr) read the array of strings stored in strArr which will contain two elements: 
the first element will represent a list of comma-separated numbers sorted in ascending order, 
the second element will represent a second list of comma-separated numbers (also sorted). 
Your goal is to return a comma-separated string containing the numbers that occur in elements of strArr in sorted order. 
If there is no intersection, return the string false.
*/


function findIntersection(strArr) {
  const arr1 = strArr[0].replace(/\s/g,"").split(",");
  const arr2 = strArr[1].replace(/\s/g,"").split(",");
  const result = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        result.push(arr1[i]);
      }
    }
  }
  return result.length > 0 ? result.join(",") : false;
}

console.log(findIntersection(["1, 3, 4, 7, 13", "1, 2, 4, 13, 15"]));

function findIntersection1(strArr) {
    const arr1 = strArr[0].replace(/\s/g,"").split(",");
    const arr2 = strArr[1].replace(/\s/g,"").split(",");
    const joiningArr = arr1.concat(arr2);
    const counts = {};
    const intersection = new Set();
    joiningArr.forEach(element => {
        if (counts[element]) {
            intersection.add(element);
        }
        else {
            counts[element] = 1;
        }
    });
    return Array.from(intersection).length > 0 ? Array.from(intersection).join(",") : false;
  }

  
  console.log(findIntersection1(["1, 3, 4, 7, 13", "1, 2, 4, 13, 15"]));


  function findIntersection2(strArr) {
    const arr1 = strArr[0].replace(/\s/g,"").split(",");
    const arr2 = strArr[1].replace(/\s/g,"").split(",");
    const intersection = new Set(arr1.filter(x => arr2.includes(x)));
    return Array.from(intersection).length > 0 ? Array.from(intersection).join(",") : false;
  };
  
  console.log(findIntersection2(["1, 3, 4, 7, 13", "1, 2, 4, 13, 15"]));

  function findIntersection3(strArr) {
    const arr1 = strArr[0].replace(/\s/g,"").split(",");
    const arr2 = strArr[1].replace(/\s/g,"").split(",");
    const result = new Set();
    arr2.forEach(item => {
      if (arr1.includes(item)) {
        result.add(item);
      }
    })
    return Array.from(result).length > 0 ? Array.from(result).join(",") : false;
  };

  console.log(findIntersection3(["1, 3, 4, 7, 13", "1, 2, 4, 13, 15"]));

