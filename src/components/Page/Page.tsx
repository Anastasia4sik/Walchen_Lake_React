import React from 'react';
import { useLocation } from 'react-router-dom';
import { Block } from '../Block';
import { Footer } from '../Footer';
import { Header } from '../Header';

export const Page: React.FC = () => {
  const { hash } = useLocation();

  const isMenuVisible = hash.includes('#menu');

  if (isMenuVisible) {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }

  return (
    <div className='page__body'>
      <Header isMenuVisible={isMenuVisible} />

      <Block />

      <Footer />
    </div>
  );
};
