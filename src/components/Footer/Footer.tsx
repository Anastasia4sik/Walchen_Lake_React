import React from 'react';
import { Link } from 'react-router-dom';
import { Arrow } from '../shared/Arrow';
import { Logo } from '../shared/Logo';

export const Footer: React.FC = () => {
  return (
    <footer id="about_as" className="footer">
      <div className="footer__logo">
        <Logo />
      </div>

      <Arrow />

      <div className="footer__links">
        <Link
          to="https://github.com/Anastasia4sik"
          target="_blank"
          className="footer__links__item"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/2111/2111432.png"
            alt="Instagram"
            className="footer__links__item__img"
          />
        </Link>

        <Link
          to="https://www.linkedin.com/in/anastasiia-fursyk-344124254/"
          target="_blank"
          className="footer__links__item" 
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/3536/3536505.png"
            alt="Facebook"
            className="footer__links__item__img"
          />
        </Link>

        <Link
          to="https://www.instagram.com/fur_fur_furrr/"
          target="_blank"
          className="footer__links__item" 
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/174/174855.png"
            alt="Twitter"
            className="footer__links__item__img"
          />
        </Link>
      </div>
    </footer>
  )
};
