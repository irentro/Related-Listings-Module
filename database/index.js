const mongoose = require('mongoose');

//Connect to MongoDB on local machine
mongoose.connect('mongodb://localhost/recommendations');

//Connect to MongoDB on EC instance
// mongoose.connect('mongodb://172.17.0.2:27017/recommendations');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => console.log('Mongoose is connected'));

const recSchema = mongoose.Schema({
  saved: Boolean,
  imageUrl: String,
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
  favoriteList: [String],
  reviews: [
    {
      name: String,
      date: String,
      comment: String,
    },
  ],
});

const Rec = mongoose.model('Recommendations', recSchema);

const save = (obj, callback) => {
  const userRec = new Rec(obj);
  userRec.save((err) => {
    if (err) {
      callback(err);
    } else {
      callback(null, 'Saved');
    }
  });
};

module.exports.save = save;
module.exports.Rec = Rec;
module.exports.db = db;
