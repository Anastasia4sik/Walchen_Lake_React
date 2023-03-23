import React, { memo } from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { Logo } from '../shared/Logo';

type Props = {
  isVisible: boolean;
};

export const Burger:React.FC<Props> = memo(({ isVisible }) => (
  <nav
    className={classNames(
      'page__menu menu',
      { visible: isVisible },
    )}
    id="menu"
  >
    <div className="container">
      <div className="menu__content">
        <div className="menu__top">
          <Logo />

          <Link to="/" className="icon icon--cross"></Link>
        </div>


        <div className="menu__call-container">
          <Link
            to="+1 234 5555-55-55"
            className="
                menu__call
                menu__call--phone"
          >
            +1 234 5555-55-55
          </Link>
        </div>
      </div>
    </div>
  </nav>
));
