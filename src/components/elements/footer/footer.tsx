import './footer.css';
import NewsletterCard from '../newsletter-card/newsletter-card.tsx';
import { FacebookRoundedIcon, InstagramIcon, XIcon, YouTubeIcon } from '../../../assets/mui-icons.ts';
import DynamicLink from '../nav-link/dynamic-link.tsx';
import ICarLogo from '../../../assets/vectors/logos/i-car-logo.tsx';
import { EXTERNAL_URLS, APP_URLS } from '../../../constants/urls.ts';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

const Footer = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__card-container">
          <NewsletterCard />
        </div>
        <div className="footer__bottom">
          <div className="footer__social-container">
            <DynamicLink to={APP_URLS.HOME}>
              <ICarLogo className="footer__logo" variant="alternative" />
            </DynamicLink>
            <div className="footer__social">
              <a href={EXTERNAL_URLS.FACEBOOK} className="footer__social-link">
                <FacebookRoundedIcon />
              </a>
              <a href={EXTERNAL_URLS.X} className="footer__social-link">
                <XIcon />
              </a>
              <a href={EXTERNAL_URLS.YOUTUBE} className="footer__social-link">
                <YouTubeIcon />
              </a>
              <a href={EXTERNAL_URLS.INSTAGRAM} className="footer__social-link">
                <InstagramIcon />
              </a>
            </div>
          </div>

          <div className="footer__links-container">
            <div className="footer__link-list">
              <h3 className="footer__heading">Our Destinations</h3>
              <ul className="footer__links">
                <li className="footer__link">
                  <DynamicLink to={APP_URLS.NOT_FOUND}>Canada</DynamicLink>
                </li>
                <li className="footer__link">
                  <DynamicLink to={APP_URLS.NOT_FOUND}>Alaska</DynamicLink>
                </li>
                <li className="footer__link">
                  <DynamicLink to={APP_URLS.NOT_FOUND}>France</DynamicLink>
                </li>
                <li className="footer__link">
                  <DynamicLink to={APP_URLS.NOT_FOUND}>Iceland</DynamicLink>
                </li>
              </ul>
            </div>
            <div className="footer__link-list">
              <h3 className="footer__heading">Our Activities</h3>
              <ul className="footer__links">
                <li className="footer__link">
                  <DynamicLink to={APP_URLS.NOT_FOUND}>Northern Lights</DynamicLink>
                </li>
                <li className="footer__link">
                  <DynamicLink to={APP_URLS.NOT_FOUND}>Cruising & Sailing</DynamicLink>
                </li>
                <li className="footer__link">
                  <DynamicLink to={APP_URLS.NOT_FOUND}>Multi-activities</DynamicLink>
                </li>
                <li className="footer__link">
                  <DynamicLink to={APP_URLS.NOT_FOUND}>Kayaking</DynamicLink>
                </li>
              </ul>
            </div>
            <div className="footer__link-list">
              <h3 className="footer__heading">Travel Blogs</h3>
              <ul className="footer__links">
                <li className="footer__link">
                  <DynamicLink to={APP_URLS.NOT_FOUND}>Bali Travel Guide</DynamicLink>
                </li>
                <li className="footer__link">
                  <DynamicLink to={APP_URLS.NOT_FOUND}>Sri Lanks Travel Guide</DynamicLink>
                </li>
                <li className="footer__link">
                  <DynamicLink to={APP_URLS.NOT_FOUND}>Peru Travel Guide</DynamicLink>
                </li>
                <li className="footer__link">
                  <DynamicLink to={APP_URLS.NOT_FOUND}>Bali Travel Guide</DynamicLink>
                </li>
              </ul>
            </div>
            <div className="footer__link-list">
              <h3 className="footer__heading">About Us</h3>
              <ul className="footer__links">
                <li className="footer__link">
                  <DynamicLink to={APP_URLS.NOT_FOUND}>Our Story</DynamicLink>
                </li>
                <li className="footer__link">
                  <DynamicLink to={APP_URLS.NOT_FOUND}>Work with us</DynamicLink>
                </li>
              </ul>
            </div>
            <div className="footer__link-list">
              <h3 className="footer__heading">Contact Us</h3>
              <ul className="footer__links">
                <li className="footer__link">
                  <DynamicLink to={APP_URLS.NOT_FOUND}>Our Story</DynamicLink>
                </li>
                <li className="footer__link">
                  <DynamicLink to={APP_URLS.NOT_FOUND}>Work with us</DynamicLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
