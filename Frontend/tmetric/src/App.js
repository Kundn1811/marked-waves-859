import './App.css';

import Project from './components/Project';
import Ts from './components/Ts';
import CreateProject from './pages/CreateProject';
import SideBar from './pages/SideBar';
import Signin from './pages/Signin';



import Navbar from './components/Navbar'
import Allroutes from './routes/Allroutes';

function App() {
  return (
    <div className="App">
       {/* <Navbar/>
       <Allroutes /> */}
  
       <SideBar/>
       <Project/>
       <CreateProject/>

    </div>
  );
}

export default App;
