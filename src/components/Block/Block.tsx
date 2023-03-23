import React, { useEffect, useState } from 'react';
import { getMountains, getPicks, getSpots } from '../../helpers/fetch';
import { Mountain } from '../../types/Mountain';
import { Pick } from '../../types/Pick';
import { Spot } from '../../types/Spot';
import { Mountains } from '../Mountain';
import { Picks } from '../Pick';
import { Sea } from '../Sea';
import { Spots } from '../Spots';
import { Subscribe } from '../Subscribe';

export const Block: React.FC = () => {
  const [spots, setSpots] = useState<Spot[]>([]);
  const [picks, setPicks] = useState<Pick[]>([]);
  const [mounts, setMounts] = useState<Mountain[]>([]);

  useEffect(() => {
    getSpots().then(data => {
      setSpots(data);
    });
  }, []);

  useEffect(() => {
    getPicks().then(data => {
      setPicks(data);
    });
  }, []);

  useEffect(() => {
    getMountains().then(data => {
      setMounts(data);
    });
  }, []);

  return (
    <main className="main">
      <Spots spots={spots}/>

      <Sea />

      <Picks />

      <Mountains mountains={mounts}/>

      <Subscribe />
    </main>
  );
};
