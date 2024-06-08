import './nav-bar.css';
import ICarLogo from '../../../assets/logos/i-car-logo.tsx';
import NavLink from '../nav-link/nav-link.tsx';
import {
  DirectionsCarRoundedIcon,
  HotelRoundedIcon,
} from '../../../assets/icons/mui-icons.ts';

const NavBar = () => {
  return (
    <div className="nav-bar">
      <div className="nav-bar__content">
        <ul className="nav-bar__list">
          <li className="nav-bar__list-item">
            <NavLink
              to="/icars"
              variant="link"
              icon={<DirectionsCarRoundedIcon />}
            >
              Find iCars
            </NavLink>
          </li>
          <li className="nav-bar__list-item">
            <NavLink to="/stays" variant="link" icon={<HotelRoundedIcon />}>
              Find Stays
            </NavLink>
          </li>
        </ul>
        <NavLink variant="wrapper" to="/home">
          <ICarLogo className="nav-bar__logo" />
        </NavLink>
        <div className="nav-bar__login-section">
          <NavLink to="/login" variant="button-transparent">
            Login
          </NavLink>
          <NavLink to="/signup" variant="button-filled">
            Sign Up
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
