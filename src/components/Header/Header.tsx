import React from 'react';
import { Menu } from '../Menu';
import { Logo } from '../shared/Logo';

type Props = {
  isMenuVisible: boolean,
};

export const Header: React.FC<Props> = ({ isMenuVisible }) => {

  return (
  <header id="Home" className="header">
    <div className="header__top">
      <div className="header__logo">
        <Logo />
      </div>

      <Menu />

      <nav className="header__nav">
        <div className="header__nav__content">
          
        </div>
      </nav>

      <div className="header__content main-container">
        <h1 className="header__title">
          The Walchen <br/> Lake
        </h1>

        <p className="header__desc">
          One of the deepest and largest apline lakes in Germany
          <br/>
          and one of the best outdoors place
          <br/>
          that you never imagine before
        </p>

        <a href="#Walchen_Lake" className="btn">
          Read more
        </a>
      </div>
    </div>
  </header>
)
};