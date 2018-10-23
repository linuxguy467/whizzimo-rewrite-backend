const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    firebaseId: {
        type: String,
        required: true
    },
    copyId: String,
    courseType: String,
    firstname: String,
    notes: String,
    scopeandsequence: Object,
    shared: Boolean,
    teacherkey: String,
    type: String
});

module.exports = {
    Student: mongoose.model('Student', studentSchema, 'students')
};