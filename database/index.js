const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/recommendations', {useMongoClient: true});