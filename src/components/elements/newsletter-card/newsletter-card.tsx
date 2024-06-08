import './newsletter-card.css';
import Mailbox from '../../../assets/vectors/mailbox.tsx';
import Button from '../button/button.tsx';
import Input from '../input/input.tsx';

const NewsletterCard = () => {
  return (
    <div className="newsletter-card">
      <div className="newsletter-card__text">
        <h1 className="newsletter-card__heading">
          Subscribe
          <br />
          Newsletter
        </h1>
        <div className="newsletter-card__description">
          <span className="newsletter-card__label">The Travel</span>
          <p className="newsletter-card__paragraph">
            Get inspired! Receive travel discounts, tips and behind the scenes
            stories
          </p>
        </div>
        <form className="newsletter-card__form">
          <Input
            variant="standard"
            type="email"
            placeholder="Your email address"
          />
          <Button
            type="submit"
            variant="newsletter"
            size="largest"
            icon="none"
            text="Subscribe"
          />
        </form>
      </div>
      <div className="newsletter-card__image">
        <Mailbox />
      </div>
    </div>
  );
};

export default NewsletterCard;
