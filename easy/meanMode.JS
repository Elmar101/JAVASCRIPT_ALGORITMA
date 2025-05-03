/*
*                                                                                      *
*                                                                                      *
*  MeanMode                                                                            *
*  Have the function MeanMode(arr) take the array of numbers stored in arr and         *
*  return 1 if the mode equals the mean, 0 if they don't equal each other              *
*  (ie. [5, 3, 3, 3, 1] should return 1 because the mode (3) equals the mean (3)).     *
*  The array will not be empty, will only contain positive integers, and will not      *
* contain more than one mode.                                                          *
*/

function meanMode(arr) {
    const mean = arr.reduce((acc, num) => acc + num, 0) / arr.length;
    const mode = arr.reduce((acc, num) => {
        acc[num] = (acc[num] || 0) + 1;
        return acc;
    }, {});
    const max = Math.max(...Object.values(mode));
    const maxKey = Object.keys(mode).find((key) => mode[key] === max);
    return +mean === +maxKey ? 1 : 0;
}  

console.log(meanMode([5, 3, 3, 3, 1])); // 1
console.log(meanMode([1, 2, 3, 4])); // 0
