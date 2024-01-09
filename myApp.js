require('dotenv').config();
const mongoose = require('mongoose');

console.log("---- ENV ----");
console.log("typeof ENV: ", typeof process.env.MONGO_URI)
console.log("has ticks", process.env.MONGO_URI.includes("'"))
console.log("ENV: ", process.env.MONGO_URI);
console.log(process.env);
mongoose.connect(String(process.env.MONGO_URI), { useNewUrlParser: true, useUnifiedTopology: true });

let personSchema = new mongoose.Schema({
  name: String,
  age: Number,
  favoriteFoods: [String]
})

let Person = mongoose.model("Person", personSchema);

const createAndSavePerson = (done) => {
  return new Person({
    name: "John Doe",
    age: 42,
    favoriteFoods: ["Smetana"]
  }).save().then((res) => {
    done(null, res);
  }).catch((err) => {
    console.log(err);
    done(err)});
};

const createManyPeople = (arrayOfPeople, done) => {
  Person.create(arrayOfPeople).then((res) => {
    done(null, res);
  }).catch((err) => {
    console.log(err);
    done(err)
  });
};

const findPeopleByName = (personName, done) => {
  done(null /*, data*/);
};

const findOneByFood = (food, done) => {
  done(null /*, data*/);
};

const findPersonById = (personId, done) => {
  done(null /*, data*/);
};

const findEditThenSave = (personId, done) => {
  const foodToAdd = "hamburger";

  done(null /*, data*/);
};

const findAndUpdate = (personName, done) => {
  const ageToSet = 20;

  done(null /*, data*/);
};

const removeById = (personId, done) => {
  done(null /*, data*/);
};

const removeManyPeople = (done) => {
  const nameToRemove = "Mary";

  done(null /*, data*/);
};

const queryChain = (done) => {
  const foodToSearch = "burrito";

  done(null /*, data*/);
};

/** **Well Done !!**
/* You completed these challenges, let's go celebrate !
 */

//----- **DO NOT EDIT BELOW THIS LINE** ----------------------------------

exports.PersonModel = Person;
exports.createAndSavePerson = createAndSavePerson;
exports.findPeopleByName = findPeopleByName;
exports.findOneByFood = findOneByFood;
exports.findPersonById = findPersonById;
exports.findEditThenSave = findEditThenSave;
exports.findAndUpdate = findAndUpdate;
exports.createManyPeople = createManyPeople;
exports.removeById = removeById;
exports.removeManyPeople = removeManyPeople;
exports.queryChain = queryChain;
