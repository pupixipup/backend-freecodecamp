require('dotenv').config();
const mongoose = require('mongoose');

const mongoUri = process.env.MONGO_URI.includes("'") ? process.env.MONGO_URI.replaceAll("'", "") : process.env.MONGO_URI;
mongoose.connect(String(mongoUri), { useNewUrlParser: true, useUnifiedTopology: true });

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
  return Person.create(arrayOfPeople).then((res) => {
    done(null, res);
  }).catch((err) => {
    console.log(err);
    done(err)
  });
};

const findPeopleByName = (personName, done) => {
  return Person.find({name: personName}).then((res) => {
    console.log("peeps", res);
    done(null, res);
  }).catch((err) => {
    console.log(err);
    done(err)
  });
};

const findOneByFood = (food, done) => {
  return Person.findOne({ food }).then((res) => {
    console.log("byFood", res);
    done(null, res);
  }).catch((err) => {
    console.log(err);
    done(err)
  });
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
