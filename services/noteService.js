import Note from "../models/noteModel.js";

const noteService = {
  create(data) {
    return Note.create(data);
  },

  getAll() {
    return Note.find()
      .populate("teacher")
      .populate("student")
      .populate("subject");
  },

  getById(id) {
    return Note.findById(id)
      .populate("teacher")
      .populate("student")
      .populate("subject");
  },

  updateById(id, data) {
    return Note.findByIdAndUpdate(id, data, { new: true });
  },
  
  deleteById(id) {
    return Note.findByIdAndDelete(id);
  }
};

export default noteService;
