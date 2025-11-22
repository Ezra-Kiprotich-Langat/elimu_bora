import Teacher from "../models/teacherModel.js";

const teacherService = {
  getAll() {
    return Teacher.find()
      .populate("students")
      .populate("subjects");
  },

  getById(id) {
    return Teacher.findById(id)
      .populate("students")
      .populate("subjects");
  },

  create(data) {
    return Teacher.create(data);
  },

  update(id, data) {
    return Teacher.findByIdAndUpdate(id, data, { new: true });
  },

  remove(id) {
    return Teacher.findByIdAndDelete(id);
  }
};

export default teacherService;
