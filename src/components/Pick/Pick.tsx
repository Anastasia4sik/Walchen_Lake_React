import React from 'react';
import { SideInfo } from '../SideInfo';
import tori from '../../images/pick/water_tori.jpg';

export const Pick: React.FC = () => {
  return  (
    <div className="pick">
      <SideInfo 
        title='Editor`s <br/> pick' 
        desc='Our picks, just for you nam an vidisse admodum omittantur, nihil corrumpit' 
        withBtn={false}
      />

        <div className="pick__slider">
          <div className="pick__slider__wrapper">
            <div className="slider__slides swiper-wrapper">
              <div className="pick__slider__slide">
                <div className="pick__top grid">
                  <div className="pick__top__main grid__item-1-4">
                    <div className="pick__top__main__content">
                      <h3 className="title--3">
                        Flatiron
                      </h3>

                      <h4 className="pick__top__main__location title--4">
                        USA
                      </h4>

                      <p className="pick__top__main__desc description">
                        Ad lorem aliquid laoreet pri, possim iisque ad vim. Te gracies maluisset eum. Sit no platonem consetetur mediocritatem, in allienum.
                      </p>
                    </div>
                  </div>

                  <div className="pick__top__side grid__item-5-6">
                    <img
                      src={tori}
                      alt="Tori gate in water"
                      className="pick__top__side__img "
                    />

                    <img
                      src="./images/pick/golden_gate_bridge.jpg"
                      alt="Golden Gate bridge"
                      className="pick__top__side__img pick__top__side__img--onTablet"
                    />
                  </div>
                </div>

                <div className="pick__bottom grid">
                  <img
                    src="./images/pick/antelope_canyon.jpg"
                    alt="Antelope canyon"
                    className="pick__bottom__img grid__item-1-2"
                  />

                  <img
                    src="./images/pick/road.jpg"
                    alt="Winter road"
                    className="pick__bottom__img grid__item-2-6"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}
