import { mongoose } from '../config/dbConfig.js';

const teacherSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: {type: String, unique: true, required: true},
    password: String,
    students: [
        {type: mongoose.Schema.Types.ObjectId,
            ref: "Student"
        }
    ],
    subjects: [{ 
    type: mongoose.Schema.Types.ObjectId, 
    ref: "Subject" 
  }]
});

const Teacher = mongoose.model("Teacher", teacherSchema);
export default Teacher;
