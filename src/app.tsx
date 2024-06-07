import './app.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';
import Home from './components/pages/home/container/home.tsx';
import NavBar from './components/elements/nav-bar/nav-bar.tsx';

function App() {
  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="*" element={<>404 - Not Found</>} />
      </Routes>
    </Router>
  );
}

export default App;
