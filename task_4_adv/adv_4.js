const checkArrayLength = () => {
  let arrayLength = null;
  while (!arrayLength || isNaN(arrayLength)) {
    arrayLength = +prompt("Array length =");
  }
  return {
    arrayLength,
  };
};

const createArray = (dynamicArr, arrayLength) => {
  for (let i = 0; i < arrayLength; i++) {
    let randomArray = Math.floor(Math.random() * (100 - 100 + 1) * 100);
    dynamicArr.push(randomArray);
  }
  console.log("Random Array:", dynamicArr);
};

const powerArray = (cubeDynamicArr, dynamicArr) => {
  cubeDynamicArr = dynamicArr.map((el) => el ** 3);
  console.log("Cube Array:", cubeDynamicArr);
};

const init = () => {
  const dynamicArr = [];
  const cubeDynamicArr = [];

  const { arrayLength } = checkArrayLength();

  createArray(dynamicArr, arrayLength);
  powerArray(cubeDynamicArr, dynamicArr);
};

init();
