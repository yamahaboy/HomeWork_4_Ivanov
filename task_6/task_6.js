const addItem = (arr, newElement) => {
  arr[arr.length] = newElement;
  console.log(arr);
};

const init = () => {
  const arr = ["a", "b"];
  const newElement = "c";

  addItem(arr, newElement);
};

init();

