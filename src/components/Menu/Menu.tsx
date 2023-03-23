import React from 'react';


export const Menu: React.FC = () => {
  return (
    <nav
      className='menu__side'
      id="menu"
    >
      <ul className="menu__side__list">
        {['Home', 'Spots', 'Sea', 'Picks', 'Mountains', 'Help'].map(item => (
          <li className="menu__side__list__item">
            <a href={`#${item}`}
            className="menu__side__list__link"
            >
              {item}
            </a>
          </li>
          ))}
      </ul>
    </nav>
  )
};
