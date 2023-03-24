import React from 'react';
import { Mountain } from '../../types/Mountain';

type Props = {
  mountains: Mountain[],
};

export const Mountains: React.FC<Props> = ({ mountains }) => {
  return  (
    <div id='Mountains' className="mountain">
      <div className="mountain__wrapper">
        <div className="mountain__top">
          <h2 className="mountain__top__title title--2">
            Mountain Collections
          </h2>

          <p className="mountain__top__desc description">
            See our best mountain collections, explore and Lorem ipsum dolor sit amet te eam oratio imperdiet, nam an vidisse admodum omittantur, nihil corrumpit an cum.
          </p>
        </div>

        {mountains.map(mount => (
          <div className="mountain__block">
            <div className="mountain__block__content">
              <h3 className="mountain__block__content__title title--3">
                {mount.name}
              </h3>

              <h4 className="mountain__block__content__location title--4">
                {mount.location}
              </h4>

              <p className="
                mountain__block__content__desc
                mountain__block__content__desc--1
                description
              ">
                {mount.description1}
              </p>

              <p className="
                mountain__block__content__desc
                mountain__block__content__desc--2
                description
              ">
                {mount.description2}
              </p>

              <a
                href={mount.link}
                target="_blank"
                className="mountain__block__content__btn btn" rel="noreferrer"
              >
                See more
              </a>
            </div>

            <img
              src={mount.img}
              alt={`#${mount.slug}`}
              className="mountain__block__img"
            />
          </div>
        ))}
      </div>

      <div className="mountain__line"></div>
    </div>
  )
}
