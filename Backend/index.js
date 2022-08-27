const express = require("express");

const connection = require("./Config/db");
const user = require("./Controlers/user.controller");
const cors = require("cors");
const projectController = require("./Controlers/project.controller");
const workspace = require("./Controlers/workSpace.controller");
const task = require("./Controlers/taskController");
const authentication = require("./Middleware/authentication");





const app = express();


app.use(cors())
app.use(express.json())
app.use("/auth",user)
app.use("/project", projectController)
app.use("/workspace",workspace)
app.use("/task",task)

app.get("/",(req,res)=>{
    res.send("heroku")
})



app.listen(process.env.port,async()=>{
    try {
        await connection;
        console.log("Database connected successfully")
    } catch (error) {
        console.log("unable to make connection with Database")
    }
})