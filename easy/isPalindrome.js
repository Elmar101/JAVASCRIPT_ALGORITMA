

function isAdvancedPalindrome(str) {
    const cleaned = str.toLowerCase().replace(/[\W_]/g, '');
    const reversed = cleaned.split('').reverse().join('');
    return cleaned === reversed;
}

console.log(isAdvancedPalindrome("A man, a plan, a canal: Panama")); // true
console.log(isAdvancedPalindrome("race a car")); // false   
console.log(isAdvancedPalindrome("Was it a car or a cat I saw?")); // true

function isPalindrome1(str) {
    const newStr = str.replace(/[^a-zA-Z0-9]/g,"").toLowerCase();
    const reversed = newStr.split('').reverse().join('');
    return newStr === reversed;
}
console.log("----------------");
console.log(isPalindrome1("A man, a plan, a canal: Panama")); // true
console.log(isPalindrome1("race a car")); // false   
console.log(isPalindrome1("Was it a car or a cat I saw?")); // true