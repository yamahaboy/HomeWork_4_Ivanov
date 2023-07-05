const calcSumArr = (sumArr, summa) => {
  for (let i = 0; i < sumArr.length; i++) {
    summa += sumArr[i];
  }
  console.log("Summa =", summa);
};
const init = () => {
  const sumArr = [2, 5, 1, 3];
  let summa = 0;

  calcSumArr(sumArr, summa);
};

init();
