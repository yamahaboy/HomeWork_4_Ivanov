const isPalindrome = (word) => {
  const line = word.toLowerCase();
  const reversedWord = line.split("").reverse().join("");
  let booleanCheck = line === reversedWord;
  console.log(`Word is Palindrome or not: ${line} => ${booleanCheck}`);
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
