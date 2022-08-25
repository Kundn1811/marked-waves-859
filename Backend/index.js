const express = require("express");

const connection = require("./Config/db");
const user = require("./Controlers/user.controller");
const cors = require("cors");
const workspace = require("./Controlers/workSpace.controller");



const app = express();


app.use(cors())
app.use(express.json())
app.use("/auth",user)
app.use("/workspace",workspace)


app.listen(process.env.port,async()=>{
    try {
        await connection;
        console.log("Database connected successfully")
    } catch (error) {
        console.log("unable to make connection with Database")
    }
})