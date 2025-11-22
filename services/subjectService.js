import Subject from "../models/subjectModel.js";

const subjectService = {

  getAll() {
    return Subject.find()
      .populate("teacher")
      .populate("students");
  },

  getById(id) {
    return Subject.findById(id)
      .populate("teacher")
      .populate("students");
  },

  create(data) {
    return Subject.create(data);
  },

  update(id, data) {
    return Subject.findByIdAndUpdate(id, data, { new: true });
  },

  remove(id) {
    return Subject.findByIdAndDelete(id);
  }
};

export default subjectService;

