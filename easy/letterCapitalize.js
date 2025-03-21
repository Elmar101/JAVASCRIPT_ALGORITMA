/*
  Using the JavaScript, have the function letterCapitalize(str)  take the str parameter  being passed and Capitalize the first letter of each word
  words will be separated by only one space
*/
function letterCapitalize(str) {
    return str.split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(' ');
}

console.log(letterCapitalize('hello world')); // Hello World
console.log(letterCapitalize('i ran there')); // I Ran There

function letterCapitalize2(str) {
    const words = str.split(' ');
    let result = '';
    
    for (const word of words) {
        result += `${word[0].toUpperCase() + word.slice(1)} `;
    }
    
    return result.trim();
}

console.log(letterCapitalize2('hello world')); // Hello World
console.log(letterCapitalize2('i ran there')); // I Ran There

function letterCapitalize3(str) {
    const words = str.split(' ');
    words.forEach((word, index) => {
        words[index] = word[0].toUpperCase() + word.slice(1);
    });
    return words.join(' ');
}

console.log(letterCapitalize3('hello world')); // Hello World
console.log(letterCapitalize3('i ran there')); // I Ran There