
import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Allroutes from './routes/Allroutes';

import "./App.css";
import Navbar from "./components/Navbar";
import NoResult from "./components/Task/NoResult";
import TaskContHead from "./components/Task/TaskContHead";

import Allroutes from "./routes/Allroutes";



function App() {
  return (
    <div className="App">

      <Navbar/>
    <Allroutes />


       {/* <Navbar/>
       <Allroutes /> */}
       {/* <NoResult /> */}
       <TaskContHead />
    


    </div>
  );
}

export default App;
