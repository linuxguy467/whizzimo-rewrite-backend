const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    _id: {
        type: String,
        required: true
    },
    accIndex: Number,
    lessonplans: Object,
    meta: Object,
    sharedStudents: Object,
    shares: Object,
    students: Object,
    tileBank: Object,
    userSettings: Object,
    userSettingsBackup: Object,
    whizzimap: Object,
    wordlistLibrary: Object,
    wordlists: Object,
    workbookList: Object
});

module.exports = {
    User: mongoose.model('User', userSchema, 'users')
};