const express = require('express');
const app = express();
const ejs = require('ejs');
const bodyParser = require('body-parser');


const mongoose = require('mongoose');
const encrypt = require('mongoose-encryption');
mongoose.Promise = global.Promise;

// Connect MongoDB at default port 27017.
mongoose.connect('mongodb://localhost:27017/userDB', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
}, (err) => {
  if (!err) {
    console.log('MongoDB Connection Succeeded.')
  } else {
    console.log('Error in DB connection: ' + err)
  }
});

const userSchema = new mongoose.Schema(
  {
    email: String,
    password: String
  }
);

const secret = "Thisisourlittlesecrect.";
userSchema.plugin(encrypt, { secret: secret, encryptedFields: ["password"] });

const User = new mongoose.model('User', userSchema);

app.set('view engine', 'ejs');
app.set(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.render('home');
});
app.get('/login', (req, res) => {
  res.render('login');
});
app.get('/register', (req, res) => {
  res.render('register');
});

app.post('/register', (req, res) => {
  const newUser = new User({
    email: req.body.username,
    password: req.body.password
  });

  newUser.save(err => {
    if (err)
      console.log(err);
    else
      res.render('secrets');
  })
});

app.post('/login', (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  User.findOne({ email: username }, (err, foundUser) => {
    if (err) {
      console.log(err);

    }
    else {
      if (foundUser) {
        if (foundUser.password === password) {
          res.render('secrets');
        }
        else {
          res.send('Username and password didnt match!');
        }
      }
      else {
        res.send("No such user name!");
      }
    }
  })
});

app.listen(3000, () => {
  console.log('App listening on port 3000!');
});