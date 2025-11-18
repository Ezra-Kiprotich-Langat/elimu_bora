import { mongoose } from '../config/dbConfig.js';

const studentSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: {type: String, unique: true, required: true},
    password: String,
    teachers: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Teacher"
  }],
    subjects: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Subject"
  }]
});
const Student = mongoose.model("Student", studentSchema);
export  default Student;