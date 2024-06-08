import './footer.css';
import NewsletterCard from '../newsletter-card/newsletter-card.tsx';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__card-container">
          <NewsletterCard />
        </div>
        <span>© 2021 - All rights reserved</span>
      </div>
    </footer>
  );
};

export default Footer;
