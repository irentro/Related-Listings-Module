const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/recommendations', {useMongoClient: true});

let recSchema = mongoose.Schema({
  roomType: String,
  city: String,
  state: String,
  country: String,
  price: Number,
  reviewCount: Number,
  ratingStars: Number,
  about: String,
  space: String,
  neighborhood: String,
  review: {
    name: String,
    date: Date,
    comment: String
  }
});

const Rec = mongoose.model('Recommendations', recSchema);

let save = (obj, callback) => {
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