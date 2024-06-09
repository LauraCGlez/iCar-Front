import './nav-bar.css';
import ICarLogo from '../../../assets/vectors/logos/i-car-logo.tsx';
import DynamicLink from '../nav-link/dynamic-link.tsx';
import {
  DirectionsCarRoundedIcon,
  HotelRoundedIcon,
} from '../../../assets/mui-icons.ts';
import { APP_URLS } from '../../../constants/urls.ts';

const NavBar = () => {
  return (
    <div className="nav-bar">
      <div className="nav-bar__content">
        <ul className="nav-bar__list">
          <li className="nav-bar__list-item">
            <DynamicLink
              to={APP_URLS.I_CARS}
              variant="link"
              icon={<DirectionsCarRoundedIcon />}
              isNavLink
            >
              Find iCars
            </DynamicLink>
          </li>
          <li className="nav-bar__list-item">
            <DynamicLink
              to={APP_URLS.STAYS}
              variant="link"
              icon={<HotelRoundedIcon />}
              isNavLink
            >
              Find Stays
            </DynamicLink>
          </li>
        </ul>
        <DynamicLink variant="wrapper" to={APP_URLS.HOME}>
          <ICarLogo className="nav-bar__logo" />
        </DynamicLink>
        <div className="nav-bar__login-section">
          <DynamicLink to={APP_URLS.LOGIN} variant="button-transparent">
            Login
          </DynamicLink>
          <DynamicLink to={APP_URLS.SIGNUP} variant="button-filled">
            Sign Up
          </DynamicLink>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
