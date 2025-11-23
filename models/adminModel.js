import { mongoose } from '../config/dbConfig.js';
import bcrypt from 'bcryptjs';

const adminSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: {type: String, unique: true, required: true},
    password: String,
    role: { type: String, default: "admin"}
});
adminSchema.pre("save", async function(next) {
    if (!this.isModified("password")) return next(); // Only hash if password changed

    const newSalt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, newSalt);

    next();
});
const Admin = mongoose.model("Admin", adminSchema);
export default Admin;