import "./App.css";
import {Routes, Route} from "react-router-dom";
import Navbar from "../components/Navbar";
import Home from "../components/Home";

function App() {
  return <div>
    
    <Routes>
      <Route path="/" element={<Navbar/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/about" element={<Navbar/>}/>
    </Routes>
  </div>
}

export default App;
