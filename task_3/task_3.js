const fruits = ["Apple", "Orange", "Mango", "Banana"]; //'Strawberry', 'Pineapple'

for (let i = 1; i <= fruits.length; i += 2) {
  console.log(fruits[i]);
}

console.log(fruits.length);

fruits.push("Strawberry");
console.log(fruits);

fruits.splice(2, 1, "Pineapple");
console.log(fruits);
