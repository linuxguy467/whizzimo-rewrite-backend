const mongoose = require('mongoose');

const lessonplanSchema = new mongoose.Schema({
    firebaseId: {
        type: String,
        required: true
    },
    activity: String,
    activityName: String,
    date_created: String,
    colors: Array,
    courseId: String,
    lessonNum: Number,
    lessonfor: String,
    lessons: {
        type: Array,
        default: []
    },
    letterTiles: Array,
    lined: Boolean,
    numWords: Number,
    tiles: Array,
    name: String,
    notes: String,
    scopeandsequence: Array,
    status: String,
    words: Array,
    workbooks: Array,
    workbook: String,
    workbookName: String,
    wtWords: Array
});

module.exports = {
    LessonPlan: mongoose.model('LessonPlan', lessonplanSchema, 'lessonplans')
};