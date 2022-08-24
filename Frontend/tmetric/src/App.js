import './App.css';
import Navbar from './pages/Navbar';
import Signin from './pages/Signin';
import Allroutes from './routes/Allroutes';

function App() {
  return (
    <div className="App">
        <Navbar />
       <Allroutes />
    </div>
  );
}

export default App;
