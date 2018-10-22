const mongoose = require('mongoose');

const wordListSchema = new mongoose.Schema({
    _id: String,
    desc: String,
    exactSoundsFilter: Number,
    exactWordsFilter: String,
    excludedWordsFilter: String,
    filters: Object,
    name: String,
    phonetic: String
});

const workBookSchema = new mongoose.Schema({
    _id: String,
    desc: String,
    name: String,
    order: Number,
    phonetic: String,
    preview10: [{
        word: {
            type: String,
            required: true
        },
        wordId: {
            type: Number,
            required: true
        }
    }]
});

module.exports = {
    WordList: mongoose.model('WordList', wordListSchema, 'collections'),
    WorkBook: mongoose.model('WorkBook', workBookSchema, 'collections')
};