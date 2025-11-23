import { mongoose } from '../config/dbConfig.js';
import bcrypt from 'bcryptjs';
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
studentSchema.pre("save", async function(next) {
    if (!this.isModified("password")) return next(); // Only hash if password changed

    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);

    next();
});
const Student = mongoose.model("Student", studentSchema);
export  default Student;