
import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Allroutes from './routes/Allroutes';
import Footer from "./components/Footer";
import Dashboard from './pages/Dashboard';




function App() {
  return (
    <div className="App">
      <Navbar />
      <Allroutes />
      <Footer />
      <Dashboard/>
    </div>
  );
}

export default App;
