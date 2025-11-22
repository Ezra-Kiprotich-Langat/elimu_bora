import { mongoose } from '../config/dbConfig.js';

const subjectSchema = new mongoose.Schema({
    title: String,
    description: String,
    teacher: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Teacher"
    },
    students: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Student"
    }]
});
const Subject = mongoose.model("Subject", subjectSchema);
export default Subject;