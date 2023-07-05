const numbers = [27, -3, 92, 0, -17, -2, 108];
const positiveNumbers = [];
const negativeNumbers = [];
const zeroNumbers = [];

for (let i = 0; i <= numbers.length; i++) {
  if (numbers[i] > 0) {
    positiveNumbers.push(numbers[i]);
  } else if (numbers[i] < 0) {
    negativeNumbers.push(numbers[i]);
  } else if (numbers[i] === 0) {
    zeroNumbers.push(numbers[i]);
  }
}
console.log("Positive Numbers:", positiveNumbers);
console.log("Negative Numbers:", negativeNumbers);
console.log("Zero Numbers:", zeroNumbers);

positiveNumbers.length = 0;
negativeNumbers.length = 0;
zeroNumbers.length = 0;

for (let getNumber of numbers) {
  if (getNumber > 0) {
    positiveNumbers.push(getNumber);
  } else if (getNumber < 0) {
    negativeNumbers.push(getNumber);
  } else if (getNumber === 0) {
    zeroNumbers.push(getNumber);
  }
}

console.log("Positive Numbers with forOf:", positiveNumbers);
console.log("Negative Numbers with forOf:", negativeNumbers);
console.log("Zero Numbers with forOf:", zeroNumbers);
