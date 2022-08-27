const Router = require("express");
const TaskModel = require("../Modals/task.model");
const authentication  = require("../Middleware/authentication")
const task = Router();

task.get("/",authentication, async(req,res)=>{
    const tasks = await TaskModel.find({})
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
task.patch("/update",authentication,async(req,res)=>{
    const toUpdate = req.body;
    try {
        const task =  await TaskModel.updateOne({_id:toUpdate._id},toUpdate)
        console.log(task)
        if(task) return res.send({message : "task updated successfully."}) 
        return res.send({message : "Unable to Update"}) 
    } catch (error) {
        return res.send({message : "Unable to Update"}) 
    }        
})
task.delete("/delete",authentication,async(req,res)=>{
    const id = req.body;
    try {
        const task =  await TaskModel.deleteOne(id)
        if(task) return res.send({message : "task deleted successfully."}) 
        return res.send({message : "Unable to Delete"}) 
    } catch (error) {
        return res.send({message : "Unable to Delete"}) 
    }        
})

module.exports = task