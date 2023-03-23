import classNames from 'classnames';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const Icon: React.FC = () => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  }

  return (
    <Link
      to={isActive ? '/' : '#menu'}
      className={classNames(
        "icon",
        { 'icon--cross': isActive},
        { 'icon--menu': !isActive}
      )}
      onClick={handleClick}
    />
  )
};
