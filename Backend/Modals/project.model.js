const mongoose = require("mongoose")
const schema = mongoose.Schema({
    userId:{ type: Boolean, default: false },
    status: { type: Boolean, default: false },
    name: { type: String, required: true },
    code: { type: String, required: true },
    notes: { type: String, required: false }
})

const ProjectModel = mongoose.model("project", schema)

module.exports = ProjectModel