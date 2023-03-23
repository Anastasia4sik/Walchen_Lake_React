import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../images/icon/logo.png';

export const Logo: React.FC = () => (
  <Link
    to="."
    className="logo"
  >
    <img
      className="header__logo__img logo__img"
      src={logo}
      alt="Cat"
    />
  </Link>
);
