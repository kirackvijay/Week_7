const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  courseId: {
    type: String,
    required: true,
  },
  taskName: {
    type: String,
    required: true,
  },
  dueDate: {
    type: String,
    required: true,
  },
  additionalDetails: {
    type: String,
  }
});

const StudentTask = mongoose.model('StudentTask', taskSchema);

module.exports = StudentTask;