import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import TaskContHead from "./components/Task/TaskContHead";
import Allroutes from "./routes/Allroutes";

function App() {
  return (
    <div className="App">
      {/* <Navbar />
      <Allroutes />
      <Footer /> */}
      <TaskContHead />
    </div>
  );
}

export default App;
