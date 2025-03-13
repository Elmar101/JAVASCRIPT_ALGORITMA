/*
Factorial

    A function that calculates the factorial of a given number.
    Parameters:4 - The number to calculate the factorial
    Returns: The factorial of the given number
    Example: factorial(4) => 24
    Note: Factorial of 0 is 1
*/

function factorial1(n) {
   let fct = 1;
   for (let i = 2; i <= n; i++) {
     fct *= i;
   }
   return fct;
}

console.log(factorial1(4));


function factorial2(n) {
  if (n === 0) {
    return 1;
  }
  return n * factorial2(n - 1);
}

console.log(factorial2(4));