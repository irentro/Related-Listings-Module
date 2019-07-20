const express = require('express');
const cors = require('cors');
const Model = require('../database/index');

const app = express();
const port = 4001;

app.use(express.json());
app.use(express.static('client/dist'));
app.use(cors());

app.get('/recommendations', (req, res) => {
  Model.Rec.find({}, (err, results) => {
    if (err) {
      res.status(400).send('error');
    } else {
      res.status(200).send(results);
    }
  });
});

app.post('/recommendations/seed', (req, res) => {
  const obj = req.body;
  if (req.body.saved === 0) {
    obj.saved = false;
  } else if (req.body.saved === 1) {
    obj.saved = true;
  }

  Model.save(obj, (err) => {
    if (err) {
      res.status(400).send('save error');
    } else {
      res.status(200).send('saved');
    }
  });
});

app.post('/recommendations/save', (req, res) => {
  const { id } = req.body;
  const { listName } = req.body;

  Model.Rec.find({ _id: id }, (err, results) => {
    if (err) {
      res.status(400).send(err);
    } else {
      results[0].favoriteList.push(listName);
      const updatedList = results[0].favoriteList;
      Model.Rec.updateOne({ _id: id }, { favoriteList: updatedList }, (err, results) => {
        if (err) {
          res.status(400).send('save error');
        } else {
          res.status(200).send('save success');
        }
      });
    }
  });
});

app.post('/recommendations/unsave', (req, res) => {
  const { id } = req.body;
  const { listName } = req.body;

  Model.Rec.find({ _id: id }, (err, results) => {
    if (err) {
      res.status(400).send(err);
    } else {
      const index = results[0].favoriteList.indexOf(listName);
      results[0].favoriteList.splice(index, 1);
      const updatedList = results[0].favoriteList;
      Model.Rec.updateOne({ _id: id }, { favoriteList: updatedList }, (err, results) => {
        if (err) {
          res.status(400).send('save error');
        } else {
          res.status(200).send('save success');
        }
      });
    }
  });
});


app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

// module.exports = app;
