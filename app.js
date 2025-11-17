const express = require('express');
const studentRoutes = require("./routes/studentRoutes.js");


const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/',studentRoutes);
app.get('/', (req, res)=>{
    res.send("Welcome to Elimu Bora")
})
module.exports = app