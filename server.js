const app = require("./app.js");
const {connectDB} = require("./config/dbConfig.js")
const dotenv = require("dotenv")
dotenv.config()


const PORT = process.env.PORT
connectDB();
app.listen(PORT, ()=>{
    console.log(`Server is running on http://localhost:${PORT}`)
})