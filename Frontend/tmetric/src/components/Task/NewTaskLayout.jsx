import React from 'react'
import {
    Editable,
    EditableInput,
    EditableTextarea,
    List,ListIcon,ListItem,
    EditablePreview,
    Flex,
    Select

  } from '@chakra-ui/react'
  import {CheckIcon,CloseIcon,EditIcon} from "@chakra-ui/icons"
  import styles from "../../Styles/NewtaskLaout.module.css"
import { CustomControlableInput } from './CustomControllableInput'
const NewTaskLayout = ({tasks,assignee}) => {

    const [start,setStart] = React.useState(false);
    const [completed,setCompleted] = React.useState(false)


    
  return (
    <div className={styles.NewTaskCompWrapper}>
{/* ====================Left wing=================== */}
        <div className={styles.leftSideInputAndTask}>
            <List spacing={3}>
            Projects
           
               {tasks?.map((elem)=>
                 <ListItem px={5} bg="#dddd" borderRadius={5} margin={2}>
                              <Flex>
                              <ListIcon as={CheckIcon} marginTop={2} color='green.500' />
                              <Editable width={"100%"} defaultValue={elem.taskName} px={2}>
                              <EditablePreview width={"100%"} />
                              <EditableInput />
                              </Editable>
                          </Flex>
                    </ListItem>
               )}
            </List>
        </div>

{/* =====================Mid Line================== */}
        <div style={{width:"1px",backgroundColor:"#a1a7b2"}}></div>

{/* =======================Right wing======================== */}


        <div className={styles.rightSideDetails} >

            <div className={styles.RightFirstDiv}>  


                    <div style={{display:"flex",gap:"7px"}}>
                       <div 
                          className={styles.markDoneCont}
                          onClick={()=>setStart(!start)}
                        >
                            <div>{!start ? <i style={{fontSize:"24px",color:"green"}} className="fa-solid fa-play"></i> :  <i style={{fontSize:"24px",color:"red"}}  className={styles.stopicon} class ="fa-solid fa-stop"></i>}</div>
                        </div> 
                        
                        <div 
                            className={styles.MarkCompButton}
                            onClick={()=>setCompleted(!completed)}
                            style={completed ? {backgroundColor:"green",color:"white"} : {backgroundColor:"#ebedf0",color:"#34393d"}}
                        >  
                            <CheckIcon marginTop={0.5} />  
                            <div> {completed ? "Completed ": "Mark Complete"}</div>
                        </div>
                    </div>

                    <div style={{display:"flex",gap:"15px",margin:"15px "}}>
                        <i style={{fontSize:"20px"}} class="fa-solid fa-share-nodes"></i>
                        <i style={{fontSize:"20px"}} class="fa-solid fa-ellipsis"></i>
                        <i style={{fontSize:"20px"}} class="fa-solid fa-arrow-right-long"></i>
                    </div>

 
               
            </div>


            <div className={styles.taskNameInput}>
                <Editable width={"100%"} defaultValue={assignee} px={2}>
                <EditablePreview width={"100%"} />
                <EditableInput />
                </Editable>
            </div>


            <div className={styles.Projectdetails}>
                <div style={{display:"flex",gap:'35px',height:"45px",paddingTop:"5px"}}>
                    <div>Project</div>
                    <div style={{display:"flex",gap:"10px"}}>
                    <i style={{marginTop:"5px"}} class="fa-solid fa-folder-closed"></i>
                    <div>
                       <Editable width={"100%"} defaultValue='Write a Task name' px={2}>
                            <EditablePreview width={"100%"} />
                            <EditableInput />
                       </Editable>
                    </div>
                    </div>
                </div>
                <div style={{display:"flex",gap:'35px',height:"45px"}}>
                    <div style={{marginTop:"7px"}}>Assignee</div>
                    <div style={{display:"flex",gap:"10px"}}>
                    <i style={{marginTop:"12px"}}  class="fa-solid fa-user-tie"></i>
                    <div>
                        <Select placeholder='Unassigned'>
                            {tasks?.map((elem,index)=><option key={index} value={elem.creater}>{elem.creater}</option>)}
                        </Select>
                    </div>
                    </div>
                </div>
                <div style={{display:"flex",gap:'35px',height:"45px",marginTop:"5px"}}>
                    <div>Due Date</div>
                    <div style={{display:"flex",gap:"10px"}}>
                    <i style={{marginTop:"5px"}} class="fa-solid fa-calendar-days"></i>
                    <div>
                       <input type="date" />
                    </div>
                    </div>
                </div>
            </div>

            
            <div className={styles.taskDescription}>
                <i style={{marginTop:"7px"}} className="fa-solid fa-bars"></i>
                <Editable defaultValue='Enter Task Description' width={"100%"} >
                    <EditablePreview />
                    <EditableTextarea paddingTop={5} paddingLeft={5}/>
                </Editable>
            </div>


            <div className={styles.TimeEstimation}>
                <div>Estimate</div>
                <div style={{marginTop:"-8px"}}> 
                    <CustomControlableInput />
                </div>
            </div>
            <div className={styles.LowerActtagDiv} style={{borderBottom: "1px solid #a1a7b2"}}>
               <div><i className="fa-solid fa-tag"></i></div>
               <div>Add Tag</div>
            </div>
            <div className={styles.LowerActtagDiv}>
               <div><i class="fa-solid fa-chart-column"></i></div>
               <div>Activity</div>
            </div>
        </div>
       
       
    </div>
  )
}

export default NewTaskLayout




