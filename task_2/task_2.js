let developer1 = {
  firstName: "Maria",
  lastName: "Y.",
  country: "Cyprus",
  continent: "Europe",
  age: 30,
  language: "Javascript",
  getLocation: function (obj) {
    console.log("Location =", obj.country + " in " + obj.continent);
  },
};

let developer2 = {
  firstName: "Victoria",
  lastName: "T.",
  country: "Puerto Rico",
  continent: "Americas",
  age: 23,
  language: "Python",
  getLocation: function (obj) {
    console.log("Location =", obj.country + " in " + obj.continent);
  },
};

developer1.getLocation(developer1);
developer2.getLocation(developer2);
