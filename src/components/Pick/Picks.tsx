import React from 'react';
import { SideInfo } from '../shared/SideInfo';
import { Pick } from '../../types/Pick';
import { Link } from 'react-router-dom';

type Props = {
  picks: Pick[],
};

export const Picks: React.FC<Props> = ({ picks }) => {
  return  (
    <div id='Picks' className="pick">
      <SideInfo 
        title={`Editor's \n pick`}
        desc='Our picks, just for you nam an vidisse admodum omittantur, nihil corrumpit' 
        withBtn={false}
      />
      
      <div className="pick__wrapper">
            {picks.map(pick => (
              <div className={`pick__wrapper__item pick__wrapper__item--${pick.number.toString()}`}>
                <Link to={pick.link} >
                  <img
                    src={pick.img}
                    alt={pick.name}
                    className="pick__wrapper__img"
                  />
                </Link>

                <h3 className="pick__wrapper__title title--3">
                  {pick.name}
                </h3>
              </div>
            ))}
      </div>
    </div>
  )
}
