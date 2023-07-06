const isPalindrome = (word) => {
  word = word.toLowerCase();
  const reversedWord = word.split("").reverse().join("");
  let booleanCheck = word === reversedWord;
  console.log(`Word is Palindrome or not: ${word} => ${booleanCheck}`);
  return booleanCheck;
};

const init = () => {
  const word1 = "Дед";
  const word2 = "Летел";
  const word3 = "Дорога";

  isPalindrome(word1);
  isPalindrome(word2);
  isPalindrome(word3);
};

init();
