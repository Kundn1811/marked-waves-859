const mongoose = require("mongoose")
const schema = new mongoose.Schema({
    userId:String,
    workSpaceId:String,
    status: { type: Boolean, default: false },
    name: { type: String, required: true },
    code: { type: String, required: true },
    notes: { type: String, required: false }
})

const ProjectModel = mongoose.model("project", schema)

module.exports = ProjectModel