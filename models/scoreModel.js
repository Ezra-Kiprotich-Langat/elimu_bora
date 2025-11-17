const {mongoose} = require("../config/dbConfig.js");

const scoreSchema = new mongoose.Schema({
    score: Number,
    examType: String,
    date: {type: Date, default: Date.now},
    student: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Student"
    },
    
    subject: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Subject"
    }
});