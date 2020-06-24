const mongoose = require('mongoose');
const assert = require('assert');

mongoose.connect("mongodb://localhost:27017/fruitsDB", { useNewUrlParser: true, useUnifiedTopology: true, });

const fruitSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please chech your data entry ,no name specified!"]
  },
  score: {
    type: Number,
    min: 1,
    max: 10
  },
  price: Number
});

const Fruit = mongoose.model("Fruit", fruitSchema);



const peopleSchema = new mongoose.Schema({
  name: String,
  age: Number,
  favouriteFruit: fruitSchema
});

const People = mongoose.model("People", peopleSchema);

// const orange = new Fruit({
//   name: "Orange",
//   score: 9,
//   price: 150
// })

const kathal = new Fruit({
  name: "Kathal",
  score: 9,
  price: 60

});

// kathal.save();

People.updateOne({ name: "Refat" }, { favouriteFruit: kathal }, err => {
  if (err)
    console.log(err);
  else
    console.log("success! updte");
});
// const people = new People({
//   name: "Amy",
//   age: 12,
//   favouriteFruit: pineapple
// });

// people.save();



// Fruit.insertMany([orange, mango], (err) => {
//   if (err)
//     console.log(err);
//   else
//     console.log("Succesfully saved all the fruits to fruitsDB");
// })






// Fruit.updateOne({ _id: "5ef196e4b3b6f528d819bad6" }, { name: "Banana" }, err => {
//   if (err) {
//     console.log(err);
//   }
//   else
//     console.log("Succesfully updated");
// })

// Fruit.deleteMany({ name: /Banana/ }, function (err) { });
People.find(function (err, fruits) {
  if (err) {
    console.log(err);
  }
  else {
    mongoose.connection.close();
    fruits.forEach(fruit => {
      console.log(fruit);
    })
  }
})

