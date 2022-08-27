import React from 'react'
import CreateProject from './CreateProject'
import SideBar from './SideBar'

function NewDashboard() {
    const [add, showAdd]= React.useState(false)
  return (
    <div>
        <SideBar showAdd={showAdd} add={add} />
        <CreateProject/>
    </div>
  )
}

export default NewDashboard