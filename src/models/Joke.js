const mongoose = require('mongoose');

const JokeSchema = new mongoose.Schema({
    question: String, 
    answer: String,
    author: String,
    createdAt: Date
});

var Joke = mongoose.model('Joke', JokeSchema);

module.exports = { Joke };
