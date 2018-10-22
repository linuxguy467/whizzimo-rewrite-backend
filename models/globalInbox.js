const mongoose = require("mongoose");

const globalInboxSchema = new mongoose.Schema({
  _id: {
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
  name: {
    type: String,
    required: true
  },
  userSettings: Object,
  workbooks: {
    type: Object,
    required: true
  }
});

module.exports = {
  GlobalInbox: mongoose.model("GlobalInbox", globalInboxSchema, "globalInbox")
};