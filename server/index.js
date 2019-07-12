const express = require ('express');
const app = express();
const Model = require('../database/index')
const port = 4001;
const cors = require('cors')


app.use(express.json());
app.use(express.static('client/dist'));
app.use(cors())


app.get('/recommendations', (req, res) => {
  Model.Rec.find({}, (err, results) => {
    if(err) {
      res.status(400).send('error')
    }
    else {
      res.status(200).send(results)
    }
  })
})

app.post('/recommendations/seed', (req, res) => {
  let obj = req.body;
  if(req.body.saved === 0) {
    obj.saved = false;
  }
  else if (req.body.saved === 1) {
    obj.saved = true;
  }

  Model.save(obj, (err) => {
    if(err){
      res.status(400).send('save error')
    }
    else{
      res.status(200).send('saved')
    }
  })
})

app.post('/recommendations/save', (req, res) => {
  let id = req.body.id;
  let listName = req.body.listName;

  Model.Rec.find({_id: id}, (err, results) => {
    if(err) {
      res.status(400).send(err)
    }
    else {
      let updatedList = results[0].favoriteList.push(listName)
      Model.Rec.updateOne({_id: id}, {favoriteList: updatedList}, (err) => {
        if(!err) {
          res.status(200).send('item saved to list')
        }
      })
    }
  })
  

  // let obj = req.body;
  // if(req.body.saved === 0) {
  //   obj.saved = false;
  // }
  // else if (req.body.saved === 1) {
  //   obj.saved = true;
  // }

  // Model.save(obj, (err) => {
  //   if(err){
  //     res.status(400).send('save error')
  //   }
  //   else{
  //     res.status(200).send('saved')
  //   }
  // })
})





app.listen(port, () => {
  console.log(`Listening on port ${port}`)
});

// module.exports = app;