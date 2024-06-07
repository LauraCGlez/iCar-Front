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
          <li className="nav-bar__item">
            <NavLink
              to="/icars"
              variant="primary"
              icon={<DirectionsCarRoundedIcon />}
            >
              Find iCars
            </NavLink>
          </li>
          <li className="nav-bar__item">
            <NavLink to="/stays" variant="primary" icon={<HotelRoundedIcon />}>
              Find Stays
            </NavLink>
          </li>
        </ul>
        <ICarLogo className="nav-bar__logo" />
        <div>Login Section</div>
      </div>
    </div>
  );
};

export default NavBar;
