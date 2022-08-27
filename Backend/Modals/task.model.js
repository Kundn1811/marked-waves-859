const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
    taskName : {type:String},
    assignee : {type:String},
    projectName: {type:String},
    creater : "String",
    dueDate : String,
    workSpaceId:String,
    userId:String,
    projectId:String,
    taskStatus:{type:String,default:"open"}
})

const TaskModel = mongoose.model("task",taskSchema)

module.exports = TaskModel