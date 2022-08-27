const Router = require("express");
const TaskModel = require("../Modals/task.model");
const authentication  = require("../Middleware/authentication")
const task = Router();

task.get("/",authentication, async(req,res)=>{
    const tasks = new TaskModel.find({})
    return res.send({tasks})
})
task.post("/create",authentication,async(req,res)=>{
    const {creater,assignee,projectName,userId,taskName,taskStatus} = req.body;
    const task = new TaskModel({
        creater,assignee,projectName,userId,taskName,taskStatus
    })
    await task.save();
    if(task) return res.send({message : "task created successfully.",taskId:task._id}) 
    else return res.send({message : "Please fill all field."})       
})

module.exports = task