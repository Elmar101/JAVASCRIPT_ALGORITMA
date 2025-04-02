/*
*                                                                                      *
*                  CODERBYTE BEGINNER CHALLENGE                                        *
*                                                                                      *
*  Division Stringified                                                                *
*  Using the JavaScript language, have the function DivisionStringified(num1,num2)     *
*  take both parameters being passed, divide num1 by num2, and return the result as    *
*  a string with properly formatted commas. If an answer is only 3 digits long,        *
*  return the number with no commas (ie. 2 / 3 should output "1"). For example:        *
*  if num1 is 123456789 and num2 is 10000 the output should be "12,345".   
*/


function divisionStringified(num1, num2) {
   const division = Math.floor(num1 / num2).toString();
   if (division.length <= 3) {
      return division;
   }

    const result = [];
    for (let i = division.length - 1; i >= 0; i--) {
        result.unshift(division[i]);
        if ((division.length - i) % 3 === 0 && i !== 0) {
            result.unshift(',');
        }
    }
    return result.join('');
}

console.log(divisionStringified(123456789, 10000)); // "12,345"
console.log(divisionStringified(123456789, 100)); // "1,234,567"
console.log(divisionStringified(123456789, 1000)); // "123,456.789"
console.log(divisionStringified(123456789, 100000)); // "1,234.56789"



function divisionStringified1(num1, num2, showdecimalPart = false) {
    // Perform the division
    const result = num1 / num2;
    
    // Convert the result to a string
    const strResult = result.toString();
    
    // Check if the result is less than 1000
    if (result < 1000) {
        return strResult;
    }
    
    // Split the string into parts before and after the decimal point
    const [integerPart, decimalPart] = strResult.split('.');
    // Format the integer part with commas
    const formattedIntegerPart = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    
    // Return the formatted result
    return decimalPart && showdecimalPart ? `${formattedIntegerPart}.${decimalPart}` : formattedIntegerPart;
}
console.log("-------------------------------------------------");
console.log(divisionStringified1(123456789, 10000)); // "12,345"
console.log(divisionStringified1(123456789, 100)); // "1,234,567"
console.log(divisionStringified1(123456789, 1000)); // "123,456.789"
console.log(divisionStringified1(123456789, 100000)); // "1,234.56789"