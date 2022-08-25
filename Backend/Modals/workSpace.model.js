const mongoose = require("mongoose");

const workSpaceSchema = new mongoose.Schema({
    companyName:{type:String, required : true},
    teamSize:{type:String, required : true},
    userId:{type:String, required : true},
})

const WorkSpaceModel = mongoose.model("workSpace",workSpaceSchema)

module.exports = WorkSpaceModel