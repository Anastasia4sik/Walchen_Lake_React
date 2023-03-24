import classNames from 'classnames';
import React from 'react';
import { Menu } from '../Menu';
import { Icon } from '../shared/Icon';
import { Logo } from '../shared/Logo';

type Props = {
  isMenuVisible: boolean,
};

export const Header: React.FC<Props> = ({ isMenuVisible }) => {

  return (
  <header id="Home" className="header">
    <div className="header__top">
      <div className={classNames(
        'header__logo',
        {'header__logo--with-menu': isMenuVisible}
      )}>
        <Logo />
  
        <Menu isVisible={isMenuVisible} />

        <Icon />
      </div>


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

        <a href="https://goo.gl/maps/xpfY6BGfmMFGALqw5" className="btn">
          See more
        </a>
      </div>
    </div>
  </header>
)
};
