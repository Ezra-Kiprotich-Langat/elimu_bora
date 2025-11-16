const {mongoose}= require("./config/dbConfig.js");

const studentSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: {type: String, unique: true, required: true},
    password: String,
    classLevel: String,
    subjects: String,
    assignedTeacher:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Teacher"
    }
});
const Student = mongoose.model("Student", studentSchema);
module.exports = Student;