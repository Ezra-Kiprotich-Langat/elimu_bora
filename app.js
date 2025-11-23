import express from "express";
import studentRoutes from "./routes/studentRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";
import scoreRoutes from "./routes/scoreRoutes.js";
import subjectRoutes from "./routes/subjectRoutes.js";
import teacherRoutes from "./routes/teacherRoutes.js";
import noteRoutes from "./routes/noteRoutes.js";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/',studentRoutes);
app.use('/',adminRoutes);
app.use('/',scoreRoutes);
app.use('/', subjectRoutes);
app.use('/', teacherRoutes);
app.use('/', noteRoutes);
app.get('/', (req, res)=>{
    res.send("Welcome to Elimu Bora")
});
export default app;