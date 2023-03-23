/* eslint-disable no-console */
import React from 'react';
import { useLocation } from 'react-router-dom';
import { Block } from '../Block';
import { Burger } from '../Burger';
import { Footer } from '../Footer';
import { Header } from '../Header';
import { Arrow } from '../shared/Arrow';

export const Page: React.FC = () => {
  const { hash } = useLocation();

  const isMenuVisible = hash.includes('#menu');

  if (isMenuVisible) {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }

  return (
    <div className="page">

      <Header isMenuVisible={isMenuVisible} />

      <Burger isVisible={isMenuVisible} />

      <Block />

      <Arrow rotate={270} isUp />

      <Footer />
    </div>
  );
};
