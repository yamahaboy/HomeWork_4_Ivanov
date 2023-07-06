const getAverage = (matrix) => {
  let sum = 0;
  let count = 0;

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      sum += matrix[i][j];
      count++;
    }
  }

  return sum / count;
};

const init = () => {
  const matrix = [
    [12, 98, 78, 65, 23],
    [54, 76, 98, 45, 65],
    [13, 324, 65, 312],
    [9092, 22, 45, 90000],
  ];
  console.log("Average =", getAverage(matrix).toFixed(2));
};
init();
