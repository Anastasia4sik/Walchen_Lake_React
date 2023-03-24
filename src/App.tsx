import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Page } from './components/Page';
import './index.scss';

export const App = () => {
  return (
    <BrowserRouter>
        <Page />
    </BrowserRouter>
  );
};
