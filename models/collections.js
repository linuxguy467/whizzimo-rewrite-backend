const mongoose = require('mongoose');

const wordListSchema = new mongoose.Schema({
    firebaseId: String,
    desc: String,
    exactSoundsFilter: Number,
    exactWordsFilter: String,
    excludedWordsFilter: String,
    filters: Object,
    name: String,
    phonetic: String
});

const workBookSchema = new mongoose.Schema({
    firebaseId: String,
    desc: String,
    name: String,
    order: Number,
    phonetic: String,
    preview10: Array
});

module.exports = {
    WordList: mongoose.model('WordList', wordListSchema, 'collections'),
    WorkBook: mongoose.model('WorkBook', workBookSchema, 'collections')
};