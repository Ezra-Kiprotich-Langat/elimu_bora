import { mongoose } from '../config/dbConfig.js';
import bcrypt from 'bcryptjs';

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
teacherSchema.pre("save", async function(next) {
    if (!this.isModified("password")) return next(); // Only hash if password changed

    const newPasswordSalt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, newPasswordSalt);

    next();
});
const Teacher = mongoose.model("Teacher", teacherSchema);
export default Teacher;
