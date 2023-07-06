const mixed = [-14, 24, -89, 43, 0, -1, 412, 4];
const positiveNumbers = [];
const negativeNumbers = [];

for (let i = 0; i <= mixed.length; i++) {
  if (mixed[i] >= 0) {
    positiveNumbers.push(mixed[i]);
  } else if (mixed[i] < 0) {
    negativeNumbers.push(mixed[i]);
  }
}
console.log("Positive Numbers:", positiveNumbers);
console.log("Negative Numbers:", negativeNumbers);
