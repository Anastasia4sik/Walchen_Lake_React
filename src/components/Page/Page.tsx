/* eslint-disable no-console */
import classNames from 'classnames';
import React from 'react';
import { useLocation } from 'react-router-dom';
import { Block } from '../Block';
import { Footer } from '../Footer';
import { Header } from '../Header';

export const Page: React.FC = () => {
  const { hash } = useLocation();

  const isMenuVisible = hash.includes('#menu');

  return (
    <div className={classNames(
      'page',
      {'page__body--with-menu': isMenuVisible}
    )}>

      <Header isMenuVisible={isMenuVisible} />

      <Block />

      <Footer />
    </div>
  );
};
