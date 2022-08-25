import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Industry from "./pages/industry/Industry";
import Allroutes from "./routes/Allroutes";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Allroutes />
      <Footer />
    </div>
  );
}

export default App;
