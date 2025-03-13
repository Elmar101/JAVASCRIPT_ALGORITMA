/*
    1.the user name is between 4 and 25 characters
    2.it must start with a letter
    3.it can only contain letters, number , and underscore charachter
    4. it cannot end with an underscore charachter

    str=u__hello__words123
*/

const str = 'u__hello__words123';

const userNameValidation =(str) => {
  if(str.length >=4 && str.length<= 25
     && (/[a-zA-Z]/).test(str.slice(0,1)) // str.charAt(0)
     && (/^[a-zA-Z0-9_]+$/).test(str) // /^[a-zA-Z0-9_]+$/ is for checking alphanumeric and underscore || /^\w+$/
     && str.slice(-1)!== '_' // str.charAt(str.length-1)!== '_'  || (/[a-zA-Z0-9]/).test(str.slice(str.length-1))); 
  ){
    return true;
  }
  return false;
};

console.log(userNameValidation(str));