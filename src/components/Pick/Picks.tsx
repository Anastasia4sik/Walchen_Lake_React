import React from 'react';
import { SideInfo } from '../SideInfo';
import tori from '../../images/pick/water_tori.jpg';
import { Pick } from '../../types/Pick';

type Props = {
  picks: Pick[],
};

export const Picks: React.FC<Props> = ({ picks }) => {
  return  (
    <div className="pick">
      <SideInfo 
        title={`Editor's \n pick`}
        desc='Our picks, just for you nam an vidisse admodum omittantur, nihil corrumpit' 
        withBtn={false}
      />
      
      <div className="pick__wrapper">
            {picks.map(pick => (
              <img
                src={pick.img}
                alt={pick.name}
                className="pick__top__img"
              />
            ))}
      </div>
    </div>
  )
}
