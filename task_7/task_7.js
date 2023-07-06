const users = [
  { name: "Alex", age: 31 },
  { name: "Olga", age: 17 },
  { name: "Carl", age: 15 },
  { name: "Nancy", age: 28 },
  { name: "Eric", age: 9 },
];

const youngUsers = [];

for (let dates of users) {
  if (dates.age < 18) {
    youngUsers.push(dates);
  }
}

console.log(youngUsers);
