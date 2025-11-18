import app from "./app.js";
import { connectDB } from "./config/dbConfig.js";
import dotenv from "dotenv";
dotenv.config()


const PORT = process.env.PORT
connectDB();
app.listen(PORT, ()=>{
    console.log(`Server is running on http://localhost:${PORT}`)
})