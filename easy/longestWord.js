/*
    Longest Word in sentence

    1. ignore punctuation and assume sen will not be empty
*/
const sentence = "azerbaycan fun&!! tim....!e ...";
const longestWord = (sentence) => {
  const arr = sentence
    .replace(/[^a-zA-Z ]/g, "")
    .split(" ")
    .sort((a, b) => b.length - a.length);
  return arr[0];
};

console.log(longestWord(sentence));
