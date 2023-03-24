import React from 'react';
import arrow from '../../../images/icon/arrow.png';

export const Arrow: React.FC = () => (
  <a href="#Home">
    <img
      src={arrow}
      alt="Arrow"
      className='arrow'
    />
  </a>
);
