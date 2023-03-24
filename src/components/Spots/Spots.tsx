import React from 'react';
import { Spot } from '../../types/Spot';
import { SideInfo } from '../shared/SideInfo';

type Props = {
  spots: Spot[],
};

export const Spots: React.FC<Props> = ({ spots }) => {
  return  (
    <div id="Spots" className="spots">
        <SideInfo title={`Featured \n Spots`} desc='Some of featured spot that you might want visit before you die' withBtn/>

        <div className="spots__wrapper">
            {spots.map(spot => (
              <div className="spots__item">
                <img
                  src={spot.img}
                  alt={spot.name}
                  className="spots__img"
                />

                <h3 className="title--3">
                  {spot.name}
                </h3>

                <h4 className="spots__location title--4">
                  {spot.location}
                </h4>

                <p className="spots__desc description">
                  {spot.description}
                </p>

                <a href={spot.link} className="spots__link">
                  See more
                </a>
              </div>
            ))}
        </div>
    </div>
  )
}
