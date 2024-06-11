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
import UnderDevelopment from './components/pages/under-development/under-development.tsx';
import { APP_URLS } from './constants/urls.ts';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path={APP_URLS.BASE_URL} element={<Navigate to={APP_URLS.HOME} />} />
        <Route path={APP_URLS.HOME} element={<Home />} />
        <Route path={APP_URLS.LOGIN} element={<UnderDevelopment />} />
        <Route path={APP_URLS.SIGNUP} element={<UnderDevelopment />} />
        <Route path={APP_URLS.I_CARS} element={<UnderDevelopment />} />
        <Route path={APP_URLS.STAYS} element={<UnderDevelopment />} />
        <Route path={APP_URLS.UNDER_DEVELOPMENT} element={<UnderDevelopment />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
