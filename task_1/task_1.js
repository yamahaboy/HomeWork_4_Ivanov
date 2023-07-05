const obj = {
  id: 10,
  Name: "TV",
  Company: "Samsung",
  Count: 7,
  Price: 1700,
  totalAmount: 11900,
};

for (let key in obj) {
  console.log("key =", key);
  console.log("keyValue =", obj[key], "\n");
}
