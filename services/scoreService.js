import Score from "../models/scoreModel.js";

const scoreService = {

  create(data) {
    return Score.create(data); 
  },

  remove(id) {
    return Score.findByIdAndDelete(id);
  },

  getAll() {
    return Score.find().populate("student").populate("subject");
  },

  getById(id) {
    return Score.findById(id).populate("student").populate("subject");
  },

  update(id, data) {
    return Score.findByIdAndUpdate(id, data, { new: true });
  }
};

export default scoreService;

