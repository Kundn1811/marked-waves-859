import React from 'react'
import ProjectBody from './ProjectBody'
import SideBar from './SideBar'

function Dashboard() {
    const [add, showAdd]= React.useState(false)
  return (
    <div>
    <SideBar showAdd={showAdd} add={add}/>
    <ProjectBody/>
    </div>
  )
}

export default Dashboard