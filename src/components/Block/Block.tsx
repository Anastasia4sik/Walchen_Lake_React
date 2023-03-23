import React from 'react';
import { Mountain } from '../Mountain';
import { Pick } from '../Pick';
import { Sea } from '../Sea';
import { Spots } from '../Spots';
import { Subscribe } from '../Subscribe';

export const Block: React.FC = () => {
  return (
    <main className="main">
      <Spots />

      <Sea />

      <Pick />

      <Mountain />

      <Subscribe />
    </main>
  );
};
