import './app.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';
import Home from './components/pages/home/container/home.tsx';
import NavBar from './components/elements/nav-bar/nav-bar.tsx';
import Footer from './components/elements/footer/footer.tsx';
import NotFound from './components/pages/not-found/not-found.tsx';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
