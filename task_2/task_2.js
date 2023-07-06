const getLocation = (obj) => {
  console.log("Location =", obj.country + " in " + obj.continent);
};
const init = () => {
  let developer1 = {
    firstName: "Maria",
    lastName: "Y.",
    country: "Cyprus",
    continent: "Europe",
    age: 30,
    language: "Javascript",
  };

  let developer2 = {
    firstName: "Victoria",
    lastName: "T.",
    country: "Puerto Rico",
    continent: "Americas",
    age: 23,
    language: "Python",
  };

  getLocation(developer1);
  getLocation(developer2);
};

init();
