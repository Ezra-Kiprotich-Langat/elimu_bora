const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: {type: String, unique: true, required: true},
    password: String,
    role: { type: String, default: "admin"}
});

const Admin = mongoose.model("Admin", adminSchema);
module.exports = Admin;