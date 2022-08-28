const express = require('express')
const authentication = require('../Middleware/authentication')
const ProjectModel = require('../Modals/project.model')
const projectController = express.Router()
// --------------------------------------------------------------------------------------------------->
projectController.get("/", authentication, async (req, res)=>{
   
    try{
        const project = await ProjectModel.find({userId:req.body.userId});
        return res.send(project)
    }catch(err){
        res.send(err)
    }

})
// --------------------------------------------------------------------------------------------------->
projectController.post("/create", authentication, async(req, res)=>{
    const {userId,} = req.body;
    const project = new ProjectModel({...req.body })
    await project.save();
    if(project) return res.send({message : "project created successfully.",projectId:project._id}) 
    else return res.send({message : "Please fill all field."}) 
})

// --------------------------------------------------------------------------------------------------->
projectController.delete("/delete/:projectId", authentication, async (req, res)=>{
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
projectController.patch("/patch/:projectId", authentication, async (req, res)=>{
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