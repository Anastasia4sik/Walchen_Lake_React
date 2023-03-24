import React from 'react';

type Props = {
  title: string,
  desc: string,
  withBtn: boolean,
};

export const SideInfo: React.FC<Props> = ({ title, desc, withBtn}) => {
  return  (
    <div className="sideInfo">
      <div className="sideInfo__main">
        <h3 className="sideInfo__main__title title--3">
          {title}
        </h3>

        <p className="sideInfo__main__desc description">
          {desc}
        </p>
      </div>

      <a href="#spots" className="sideInfo__link">
        View All
      </a>
    </div>
  )
}
