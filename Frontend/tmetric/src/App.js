import './App.css';
import Navbar from './pages/Navbar';
import SideBar from './pages/SideBar';
import Signin from './pages/Signin';
import Allroutes from './routes/Allroutes';

function App() {
  return (
    <div className="App">
        {/* <Navbar />
       <Allroutes /> */}
       <SideBar/>
    </div>
  );
}

export default App;
