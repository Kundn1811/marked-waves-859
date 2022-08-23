const express = require("express");

const connection = require("./Config/db");
const user = require("./Controlers/user.controller");


const app = express();



app.use(express.json())
app.use("/auth",user)


app.listen(process.env.port,async()=>{
    try {
        await connection;
        console.log("Database connected successfully")
    } catch (error) {
        console.log("unable to make connection with Database")
    }
})