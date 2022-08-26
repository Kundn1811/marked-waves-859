
import './App.css'
import Navbar from './components/Navbar'
import Project from './components/Project';
import CreateProject from './pages/CreateProject';
import SideBar from './pages/SideBar';
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
