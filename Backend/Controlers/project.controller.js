const express = require('express')
const authentication = require('../Middleware/authentication')
const ProjectModel = require('../Modals/project.model')
const projectController = express.Router()
// --------------------------------------------------------------------------------------------------->
projectController.get("/", authentication, async (rrq, res)=>{
    const {userId} = req.body
    const projects = await ProjectModel.find({userId})
    if(projects){
        return res.send({
            message:"GET REQUEST SUCCESSFUL",
            projects
        })
    }
    else{
        res.send("Please create some projects")
    }
})
// --------------------------------------------------------------------------------------------------->
projectController.post("/create", authentication, async(req, res)=>{
    const new_project = await new ProjectModel({
        ...req.body,
    })
    new_project.save((err, success)=>{
        if(err){
            res.send("Some error occured", err)
        }
        else{
            res.send({message:"Success"})
        }
    })
})

// --------------------------------------------------------------------------------------------------->
projectController.delete("/:projectId/delete", authentication, async (req, res)=>{
    const {projectId} = req.params
    const {userId} = req.body
    const project = await ProjectModel.findOne({_id:projectId})
    if(project.userId === userId){
        const deleted_project = await ProjectModel.findOneAndDelete({_id:projectId})
        res.send({
            message:"Deleted Successfully",
            deleted_item:deleted_project
        })
    }
    else{
        res.send({message:"You are not authorized"})
    }
})
// --------------------------------------------------------------------------------------------------->
projectController.patch("/:projectId/patch", authentication, async (req, res)=>{
    const {projectId} = req.params
    const {userId} = req.body
    const details = await ProjectModel.findOne({_id:projectId})
    if(details.userId === userId){
        const newProject = await ProjectModel.findOneAndUpdate({_id:projectId}, req.body, {new:true})
        res.send("updated successfully")
    } 
    else{
        res.send("you are not authorized")
    } 
})

module.exports = projectController