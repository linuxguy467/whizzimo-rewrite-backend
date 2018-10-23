const mongoose = require("mongoose");

const globalInboxSchema = new mongoose.Schema({
  firebaseId: {
    type: String,
    required: true
  },
  blackboard: Object,
  courses: Object,
  date: {
    type: String,
    required: true
  },
  lessonPlans: Object,
  name: String,
  userSettings: Object,
  workbooks: Object
});

module.exports = {
  GlobalInbox: mongoose.model("GlobalInbox", globalInboxSchema, "globalInbox")
};