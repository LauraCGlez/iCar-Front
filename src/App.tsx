import './App.css'
import {BrowserRouter as Router, Route, Routes, Navigate} from "react-router-dom";
import Home from "./app/components/home/home.tsx";

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to='/home'/>}/>
          <Route path="/home" element={<Home/>}/>
        </Routes>
      </Router>
  )
}

export default App
