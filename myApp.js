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
    done(null, res);
  }).catch((err) => {
    console.log(err);
    done(err)
  });
};

const findOneByFood = (food, done) => {
  return Person.findOne({ favoriteFoods: food }).then((res) => {
    done(null, res);
  }).catch((err) => {
    console.log(err);
    done(err)
  });
};

const findPersonById = (personId, done) => {
  return Person.findById(personId).then((res) => {
    done(null, res);
  }).catch((err) => {
    console.log(err);
    done(err)
  });
};

const findEditThenSave = (personId, done) => {
  const foodToAdd = "hamburger";
  Person.findById(personId).then((person) => {
   person.favoriteFoods.push(foodToAdd);
   return person.save();
  }).then((res) => {
    done(null,res);
  }).catch((err) => {
  console.log(err);
  done(err)
});
};

const findAndUpdate = (personName, done) => {
  const ageToSet = 20;
  return Person.findOneAndUpdate({ name: personName }, {age: ageToSet})
      .then((res) => {
    done(null,res);
  }).catch((err) => {
    console.log(err);
    done(err)
  });
};

const removeById = (personId, done) => {
  Person.findByIdAndRemove(personId)
      .then((res) => {
        done(null,res);
      }).catch((err) => {
    console.log(err);
    done(err)
  });
};

const removeManyPeople = (done) => {
  const nameToRemove = "Mary";
  Person.remove({name: nameToRemove})
      .then((res) => {
        done(null,res);
      }).catch((err) => {
    console.log(err);
    done(err)
  });
};

const queryChain = (done) => {
  const foodToSearch = "burrito";
  Person
      .find({food: foodToSearch})
      .sort({name: "asc"})
      .limit(2)
      .select("-age")
      .exec()
      .then((res) => {
        done(null,res);
      }).catch((err) => {
    console.log(err);
    done(err)
  });
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
