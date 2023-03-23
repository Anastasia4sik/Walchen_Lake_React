import React from 'react';
import { User } from '../../types/User';
import { Menu } from '../Menu';
import { Logo } from '../shared/Logo';
import bc from '../../images/bc_header.png';
import arrow from '../../images/icon/arrow.png';

type Props = {
  user?: User,
  isMenuVisible: boolean,
};

export const Header: React.FC<Props> = ({ user, isMenuVisible }) => (
  <header id="Home" className="header">
    <div className="header__top">
      <div className="header__logo">
        <Logo />
      </div>

      <nav className="header__nav">
        <div className="header__nav__content">
          <a href="#My_Collection" className="header__nav__content__item">
            My collection
          </a>

          <a
            href={`#${user?.name}`}
            className="header__nav__content__item header__nav__content__item--user"
          >
            {user?.name}
          </a>

          <a href={`#${user?.name}`} className="header__nav__content__photo">
            <img
              src={user?.photo}
              alt="User"
              className="header__nav__content__photo__item"
            />
          </a>
        </div>
      </nav>

      <div className="header__content main-container">
        <h1 className="header__title">
          The Walchen <br/> Lake
        </h1>

        <p className="header__desc">
          One of the deepest and largest apline lakes in Germany
          <br/>
          and one of the best outdoors place
          <br/>
          that you never imagine before
        </p>

        <a href="#Walchen_Lake" className="btn">
          Read more
        </a>
      </div>
    </div>

    <Menu isVisible={isMenuVisible} />

    <div className="wrapper">
      <div className="swiper-container">
        <div className="swiper-wrapper">
          {[1, 2, 3, 4, 5, 6, 7, 8].map(slide => (
            <div className="swiper-slide">
              <img
                className="swiper-image"
                src={bc}
                alt='background'
              />
            </div>
          ))}
        </div>
      </div>

      <div id="swiper-button-prev" className="swiper-button-prev">
        <img
          className="swiper-button-prev-btn"
          src={arrow}
          alt="left"
        />
      </div>

      <div id="swiper-button-next" className="swiper-button-next">
        <img
          className="swiper-button-next-btn"
          src={arrow}
          alt="right"
        />
      </div>


      <div id="swiper__text" className="swiper__text">
        <h4 className="description swiper__text__title">
          Outdoors Edition
        </h4>

        <div className="swiper__text__line swiper__text__line--1"></div>

        <div id="swiper__text__number" className="description swiper-pagination"></div>

        <div className="swiper__text__line swiper__text__line--2"></div>
      </div>
    </div>
  </header>
);
