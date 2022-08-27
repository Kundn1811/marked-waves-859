import React from 'react'
import Project from '../components/Project'
import ProjectBody from './ProjectBody'
import SideBar from './SideBar'

function Dashboard() {
    const [add, showAdd]= React.useState(false)
  return (
    <div>
    <SideBar showAdd={showAdd} add={add}/>
    <Project/>
    <ProjectBody/>
    </div>
  )
}

export default Dashboard