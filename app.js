const express = require('express');

const app = express()
app.get('/', (req, res)=>{
    res.send("Welcome to Elimu Bora")
})
module.exports = app