const express = require("express")
const app = express()
const router = require("./router.js")
// const connectDB = require("./db.js")
app.use(express.json())

app.use("/api", router)

app.listen(3000, () => {
    // connectDB()
    console.log("Server Connected")
})