const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/recommendations', {useMongoClient: true});

let recSchema = mongoose.Schema({
  saved: Boolean,
  roomType: String,
  city: String,
  state: String,
  country: String,
  price: Number,
  reviewCount: Number,
  ratingStars: Number,
  title: String,
  about: String,
  space: String,
  neighborhood: String,
  reviews: [
    {
      name: String,
      date: String,
      comment: String
    }
  ]
});

const Rec = mongoose.model('Recommendations', recSchema);

let save = (obj, callback) => {
  console.log('hello database save')
  const userRec = new Rec(obj);
  userRec.save((err) => {
    if(err) {
      callback(err);
    }
    else {
      callback(null, 'Saved')
    }
  });
}

module.exports.save = save;
module.exports.Rec = Rec;