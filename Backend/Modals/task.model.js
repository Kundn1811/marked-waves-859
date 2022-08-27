const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
    taskName : {type:String, required : true},
    assignee : {type:String, required : true},
    projectName: {type:String, required : true},
    creater : "String",
    dueDate : String,
    workSpace:String,
    userId:String,
    taskStatus:{type:String,default:"open"}
})

const TaskModel = mongoose.model("task",taskSchema)

module.exports = TaskModel