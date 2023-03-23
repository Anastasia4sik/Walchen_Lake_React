import classNames from 'classnames';
import React from 'react';

type Props = {
  isVisible: boolean;
};

export const Menu: React.FC<Props> = ({ isVisible }) => {
  return (
    <nav
      className={classNames(
        'page__menu menu',
        { visible: isVisible },
      )}
      id="menu"
    >
      <ul className="menu__list">
        {['Home', 'Spots', 'Sea', 'Picks', 'Mountains', 'Help'].map(item => (
          <li className="menu__list__item">
            <a href={`#${item}`}
            className="menu__list__link"
            >
              {item}
            </a>
          </li>
          ))}
      </ul>
    </nav>
  )
};
