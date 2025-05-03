/*
 *                                                                                      *
 *  Counting Minutes I                                                                  *
 *  Using the JavaScript language, have the function CountingMinutesI(str) take the     *
 *  str parameter being passed which will be two times (each properly formatted with    *
 *  a colon and am or pm) separated by a hyphen and return the total number of minutes  *
 *  between the two times. The time will be in a 12 hour clock format. For example:     *
 *  if str is 9:00am-10:00am then the output should be 60. If str is 1:00pm-11:00am     *
 *  the output should be 1320.                                                          *
 */

function countingMinutesI(str) {
  // "9:00am-10:00am"
  const arr = str.split("-"); // ["9:00am", "10:00am"]

  const time1 = arr[0].split(":"); // ["9", "00am"]
  const time2 = arr[1].split(":"); // ["10", "00am"]

  let time1Hours = parseInt(time1[0]); // 9
  const time1AMPM = time1[1].slice(-2); // "am"
  const time1Minutes = parseInt(time1[1].slice(-4, -2)); // 00

  let time2Hours = parseInt(time2[0]); // 10
  const time2AMPM = time2[1].slice(-2); // "am"
  const time2Minutes = parseInt(time2[1].slice(-4, -2)); // 00

  if (time1AMPM === "pm" && time2AMPM === "am") {
    time2Hours += 12;
  } else if (time1AMPM === "am" && time2AMPM === "pm") {
    time1Hours += 12;
  }
  const minutes = (time2Hours - time1Hours) * 60 + (time2Minutes - time1Minutes); // minutes
  return minutes < 0 ? minutes + 24 * 60 : minutes; // if negative, add 1440 minutes (24*60)
}

console.log(countingMinutesI("9:00am-10:00am")); // 60
console.log(countingMinutesI("10:00am-9:00am")); //1380
console.log(countingMinutesI("1:00pm-11:00am")); // 1320
console.log(countingMinutesI("1:50am-1:30am")); // 1420
console.log(countingMinutesI("1:00pm-11:30pm")); // 630


