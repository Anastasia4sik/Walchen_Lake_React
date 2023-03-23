import React from 'react';
import { Logo } from '../shared/Logo';

export const Footer: React.FC = () => {
  return (
    <footer id="about_as" className="footer">
      <div className="footer__logo">
        <Logo />
      </div>

      <p className="footer__date title--4">
        &copy; 2017 - 2018
      </p>

      <div className="footer__links">
        <a
          href="https://www.instagram.com/"
          target="_blank"
          className="footer__links__item"
        >
          <img
            src="./images/icons/instagram.png"
            alt="Instagram"
            className="footer__links__item__img"
          />
        </a>

        <a
          href="https://www.facebook.com/"
          target="_blank"
          className="footer__links__item"
        >
          <img
            src="./images/icons/facebook.png"
            alt="Facebook"
            className="footer__links__item__img"
          />
        </a>

        <a
          href="https://twitter.com/"
          target="_blank"
          className="footer__links__item"
        >
          <img
            src="./images/icons/twitter.png"
            alt="Twitter"
            className="footer__links__item__img"
          />
        </a>
      </div>
    </footer>
  )
};
