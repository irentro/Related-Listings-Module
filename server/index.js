const express = require ('express');
const app = express();
const Model = require('../database/index')
const port = 4001;


app.use(express.json());
app.use(express.static('client/dist'));


app.get('/recommendations', (req, res) => {
  console.log('hello server get');
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
    console.log('post obj', obj)
    Model.save(obj, (err) => {
      if(err){
        res.status(400).send('save error')
      }
      else{
        res.status(200).send('saved')
      }
    })
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
});
