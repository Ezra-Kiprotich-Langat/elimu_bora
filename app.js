import express from "express"
import studentRoutes from "./routes/studentRoutes.js"

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/',studentRoutes);
app.get('/', (req, res)=>{
    res.send("Welcome to Elimu Bora")
})
export default app;