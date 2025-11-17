const {mongoose} = require("../config/dbConfig.js");

const subjectSchema = new mongoose.Schema({
    name: String,
    teacher: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Teacher"
    },
    students: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Student"
    }]
});