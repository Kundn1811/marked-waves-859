import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { GoGraph } from "react-icons/go";
import { GrEmptyCircle, GrIntegration } from "react-icons/gr";
import { AiFillFolder } from "react-icons/ai";
import { BiBuildings, BiAlarmOff, BiUserCircle } from "react-icons/bi";
import { RiPagesLine } from "react-icons/ri";
import { FiSettings } from "react-icons/fi";
import { SiMicrosoftteams } from "react-icons/si";
import { MdSubscriptions } from "react-icons/md";

function TodoSideBar() {
  return (
    <div style={{width:"225px",background:"rgb(246,247,248"}}>
        <Accordion style={{background:"rgb(246,247,248",width:"225px"}}>
            <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            >
            <Typography  style={{ fontWeight: "600", fontSize: "15px", marginLeft: "10px" }}>Analyze</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <p style={{ margin:"0px 65px 0 0",fontSize:"16px"}}>
                <GoGraph /> Reports
                </p>
                <p style={{ margin:"12px 65px 0 0",fontSize:"16px"}}>
                    <GrEmptyCircle /> Activity
                </p>
            <Typography>
            </Typography>
            </AccordionDetails>
        </Accordion>
        <Accordion style={{background:"rgb(246,247,248",width:"225px"}}>
            <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
            >
            <Typography style={{ fontWeight: "600", fontSize: "15px", marginLeft: "10px" }}>Manage</Typography>
            </AccordionSummary>
            <AccordionDetails>
            <Typography>
            <p style={{ margin:"0px 65px 0 0",fontSize:"16px"}}>
                <AiFillFolder /> Projects
                </p>
                <p style={{ margin:"12px 85px 0 0",fontSize:"16px"}}>
                <BiBuildings /> Client
                </p>
                <p style={{ margin:"12px 65px 0 0",fontSize:"16px"}}>
                <RiPagesLine /> Invoices
                </p>
                <p style={{ margin:"12px 65px 0 0",fontSize:"16px"}}>
                <BiAlarmOff />  Time Off
                </p>
            </Typography>
            </AccordionDetails>
        </Accordion>
        <Accordion style={{background:"rgb(246,247,248",width:"225px"}}>
            <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
            >
            <Typography style={{ fontWeight: "600", fontSize: "15px", marginLeft: "10px" }}>Workspace</Typography>
            </AccordionSummary>
            <AccordionDetails>
            <Typography>
            <p style={{ margin:"12px 65px 0 0"}}>
            <FiSettings /> settings
          </p>
            <p style={{ margin:"12px 57px 0 0"}}>
                <BiUserCircle /> Members
            </p>
            <p style={{ margin:"12px 70px 0 0"}}>
                <SiMicrosoftteams /> Teams
            </p>
            <p style={{ margin:"12px 35px 0 0"}}>
                <GrIntegration /> Integrations
            </p>
            <p style={{ margin: "12px 40px 0 0" }}>
                <MdSubscriptions /> Subsciption
            </p>
            </Typography>
            </AccordionDetails>
        </Accordion>
        <div>
        <div style={{ display: "flex", gap: 10, marginTop: "30px",marginLeft:"20px" }}>
          <div>
            <img
              src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
              alt=""
              style={{ width: 50, height: 50, borderRadius: "50%" }}
            />
          </div>
          <div style={{ textAlign: "left", color: "grey",marginTop:"-15px" }}>
            <p>My Company</p>
            <p style={{ fontSize: "20px", color: "black",marginTop:"-15px" }}>ervrrbv</p>
          </div>
        </div>
        <div>
          <button style={{fontWeight:"bold", border:"1px solid black",borderRadius:"5px", height:"30px",width:"70px"}}>Logout</button>
        </div>
      </div>
    </div>
  )
}

export default TodoSideBar
