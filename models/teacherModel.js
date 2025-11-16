const mongoose = require('mongoose');

const teacherSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: {type: String, unique: true, required: true},
    password: String,
    subjects: [String],
    students: [
        {type: mongoose.Schema.Types.ObjectId,
            ref: "Student"
        }
    ]
});

const Teacher = mongoose.model("Teacher", teacherSchema);
module.exports = Teacher;
