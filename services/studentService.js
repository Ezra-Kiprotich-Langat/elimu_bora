const Student = require("../models/studentModel.js")

module.exports = {
  create(data) { return Student.create(data); },
  getAll() { return Student.find(); },
  getById(id) { return Student.findById(id); },
  update(id, data) { return Student.findByIdAndUpdate(id, data, { new: true }); },
  remove(id) { return Student.findByIdAndDelete(id); }
};