// Problem
// Given a string,
// find and return the character that appears most frequently in the string.

// Examples:
// getMaxCharacters("abcccccccd") === "c"
// getMaxCharacters("apple 1231111") === "1"

export const getMaxCharacters = (str) => {
  const words = {};
  let max = 0;
  let maxChar = "";
  console.log(str);

  for (const letter of str) {
    words[letter] = words[letter] + 1 || 1;
    console.log(words);
  }

  for (const letter in words) {
    if (words[letter] > max) {
      max = words[letter];
      maxChar = letter;
    }
  }

  console.log(maxChar);
  return maxChar;
};

console.log(getMaxCharacters("abcccccccd"));
console.log(getMaxCharacters("apple 1231111"));
