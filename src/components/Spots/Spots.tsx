import React from 'react';
import { SideInfo } from '../SideInfo';

export const Spots: React.FC = () => {
  return  (
    <div id="spots" className="spots">
        <SideInfo title='Featured <br/> Spots' desc='Some of featured spot that you might want visit before you die' withBtn/>

        <div className="spots__wrapper">
          <div className="spots__slide">
            <div className="spots__item">
              <img
                src="./images/spots/ollantaytambo.jpg"
                alt="ollantaytambo"
                className="spots__img"
              />

              <h3 className="title--3">
                Ollantaytambo
              </h3>

              <h4 className="spots__location title--4">
                Peru
              </h4>

              <p className="spots__desc description">
                Ad lorem aliquid laoreet pri, possim iisque ad vim. Te gracies maluisset eum. Sit no platonem consetetur mediocritatem, in allienum.
              </p>

              <a href="#Ollantaytambo" className="spots__link">
                read more
              </a>
            </div>

            <div className="spots__item">
              <img
                src="./images/spots/antelope_canyon.jpg"
                alt="Antelope Canyon"
                className="spots__img"
              />

              <h3 className="title--3">
                Antelope Canyon
              </h3>

              <h4 className="spots__location title--4">
                USA
              </h4>

              <p className="spots__desc description">
                Ad lorem aliquid laoreet pri, possim iisque ad vim. Te gracies maluisset eum. Sit no platonem consetetur mediocritatem, in allienum.
              </p>

              <a href="#Antelope_Canyon" className="spots__link">
                read more
              </a>
            </div>

            <div className="spots__item">
              <img
                src="./images/spots/lake_louise.jpg"
                alt="Lake Louise"
                className="spots__img"
              />

              <h3 className="title--3">
                Lake Louise
              </h3>

              <h4 className="spots__location title--4">
                Canada
              </h4>

              <p className="spots__desc description">
                Ad lorem aliquid laoreet pri, possim iisque ad vim. Te gracies maluisset eum. Sit no platonem consetetur mediocritatem, in allienum.
              </p>

              <a href="#Lake_Louise" className="spots__link">
                read more
              </a>
            </div>
          </div>
        </div>
    </div>
  )
}
