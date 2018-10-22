const {
    WhizzimoAcademy
} = require("./whizzimodev-export.json");
const {
    connectToDatabase
} = require("./connection");
const {
    WordList,
    WorkBook
} = require("./models/collections");
const {
    GlobalInbox
} = require("./models/globalInbox");
const {
    LessonPlan
} = require('./models/lessonplans');
const {
    Student
} = require('./models/students');
const {
    User
} = require('./models/users');

connectToDatabase();
const {
    collections,
    globalInbox,
    lessonplans,
    students,
    users
} = WhizzimoAcademy, {
    whizzimoCollection
} = collections, {
    wordlists,
    workbookList
} = whizzimoCollection;

const makeWordListModels = async () => {
    for (const [_id, value] of Object.entries(wordlists)) {
        try {
            await new WordList({
                _id,
                desc: value.desc,
                exactSoundsFilter: value.exactSoundsFilter,
                exactWordsFilter: value.exactWordsFilter,
                excludedWordsFilter: value.excludedWordsFilter,
                filters: value.filters,
                name: value.name,
                phonetic: value.phonetic
            }).save();
        } catch (e) {
            console.error(e.message);
            process.exit(-1);
        }
    }
};

const makeWorkBookModels = async () => {
    for (const [_id, value] of Object.entries(workbookList)) {
        try {
            await new WorkBook({
                _id,
                desc: value.desc,
                name: value.name,
                order: value.order,
                phonetic: value.phonetic,
                preview10: value.preview10
            }).save()
        } catch (e) {
            console.error(e.message);
            process.exit(-1);
        }
    }
};

const makeGlobalInboxModels = async () => {
    for (const [_id, value] of Object.entries(globalInbox)) {
        try {
            await new GlobalInbox({
                _id,
                blackboard: value.blackboard ? value.blackboard : null,
                courses: value.courses ? value.courses : null,
                date: value.date,
                lessonPlans: value.lessonPlans ? value.lessonPlans : null,
                name: String,
                userSettings: value.userSettings ? value.userSettings : null,
                workbooks: value.workbooks
            }).save();
        } catch (e) {
            console.error(e.message);
            process.exit(-1);
        }
    }
};

const makeLessonplanModels = async () => {
    for (const [_id, value] of Object.entries(lessonplans)) {
        try {
            await new LessonPlan({
                _id,
                activity: value.activity ? value.activity : null,
                activityName: value.activityName ? value.activityName : null,
                date_created: value.created ? value.created : "",
                colors: value.colors ? value.colors : null,
                courseId: value.courseId ? value.courseId : null,
                lessonNum: value.lessonNum ? value.lessonNum : null,
                lessonfor: value.lessonfor ? value.lessonfor : null,
                lessons: value.lessons ? value.lessons : [],
                letterTiles: value.letterTiles ? value.letterTiles : null,
                lined: value.lined ? value.lined : null,
                numWords: value.numWords ? value.numWords : null,
                tiles: value.tiles ? value.tiles : null,
                name: value.name ? value.name : null,
                notes: value.notes ? value.notes : null,
                scopeandsequence: value.scopeandsequence ? value.scopeandsequence : null,
                status: value.status ? value.status : null,
                words: value.words ? value.words : null,
                workbooks: value.workbooks ? value.workbooks : null,
                workbook: value.workbook ? value.workbook : null,
                workbookName: value.workbookName ? value.workbookName : null,
                wtWords: value.wtWords ? value.wtWords : null,
            }).save();
        } catch (e) {
            console.error(e.message);
            process.exit(-1);
        }
    }
};

const makeStudentModels = async () => {
    for (const [_id, value] of Object.entries(students)) {
        try {
            await new Student({
                _id,
                copyId: value.copyId ? value.copyId : null,
                courseType: value.courseType ? value.courseType : null,
                firstname: value.firstname ? value.firstname : '',
                scopeandsequence: value.scopeandsequence ? value.scopeandsequence : null,
                teacherkey: value.teacherkey ? value.teacherkey : null,
                type: value.type ? value.type : null
            }).save();
        } catch (e) {
            console.error(e.message);
            process.exit(-1);
        }
    }
};

const makeUserModels = async () => {
    for (const [_id, value] of Object.entries(users)) {
        try {
            //.priority is first entry in users object; not neccessary
            if ([value['.priority']]) continue;
            await new User({
                _id,
                accIndex: value.accIndex ? value.accIndex : null,
                lessonplans: value.lessonplans ? value.lessonplans : null,
                meta: value.meta ? value.meta : null,
                sharedStudents: value.sharedStudents ? value.sharedStudents : null,
                shares: value.shares ? value.shares : null,
                students: value.students ? value.students : null,
                tileBank: value.tileBank ? value.tileBank : null,
                userSettings: value.userSettings ? value.userSettings : null,
                userSettingsBackup: value.userSettingsBackup ? value.userSettingsBackup : null,
                whizzimap: value.whizzimap ? value.whizzimap : null,
                wordlistLibrary: value.wordlistLibrary ? value.wordlistLibrary : null,
                wordlists: value.wordlists ? value.wordlists : null,
                workbookList: value.workbookList ? value.workbookList : null
            }).save();
        } catch (e) {
            console.error(e.message);
            process.exit(-1);
        }
    }
};

makeWordListModels();
makeWorkBookModels();
makeGlobalInboxModels();
makeLessonplanModels();
makeStudentModels();
makeUserModels();