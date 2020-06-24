const express = require('express');
const app = express();
const mongoose = require('mongoose');
const ejs = require('ejs');
const bodyParser = require('body-parser');

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

mongoose.connect("mongodb://localhost:27017/wikiDB", { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false });

const articleSchema = {
  title: String,
  content: String
}
const Article = mongoose.model("Article", articleSchema);

app.route("/articles")
  .get(
    (req, res) => {
      Article.find({}, (err, foundArticles) => {
        if (!err)
          res.send(foundArticles);
        else
          res.send(err);

      });
    }
  )
  .post((req, res) => {
    const article = new Article({
      title: req.body.title,
      content: req.body.content
    });
    article.save(err => {
      if (!err) {
        res.send('successfully added a new article!')
      }
      else {
        res.send(err);
      }
    });

  }

  )
  .delete((req, res) => {
    Article.deleteMany({}, (err) => {
      if (!err) {
        res.send("Deleted all articles");
      }
      else {
        res.send(err);
      }
    });
  }
  );





/// results targetting a specific article
app.route("/articles/:articleTitle")
  .get((req, res) => {
    Article.findOne({ title: req.params.articleTitle }, (err, foundArticle) => {
      if (foundArticle) {
        res.send(foundArticle);
      }
      else {
        res.send("no articles matching that title was found!");
      }
    });

  })
  .put((req, res) => {
    Article.update(
      {
        title: req.params.articleTitle
      },
      {
        title: req.body.title,
        content: req.body.content
      },
      { overwrite: true },
      (err) => {
        if (!err) {
          res.send("successfully updated");
        }
      }
    )
  })
  .patch((req, res) => {
    Article.update(
      {
        title: req.params.articleTitle
      },
      {
        $set: req.body
      },
      err => {
        if (!err)
          res.send("succesfully updated!");
        else
          res.send(err);
      }
    )
  })
  .delete((req, res) => {
    Article.deleteOne({
      title: req.params.articleTitle
    },
      err => {
        if (!err)
          res.send("Succesfully deleted!");
        else
          res.send(err);
      }
    )
  });




app.listen(3000, () => {
  console.log('server connected!');
})