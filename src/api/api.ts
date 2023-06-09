import { Pick } from '../types/Pick';
import { Spot } from '../types/Spot';
import { Mountain } from '../types/Mountain';

export function getSpots(): Promise<Spot[]> {
  return fetch('https://anastasia4sik.github.io/Walchen_Lake_React/api/spots.json')
    .then(response => response.json())
    .catch(error => {
      console.error(error);
      return [];
    });
}

export function getPicks(): Promise<Pick[]> {
  return fetch('https://anastasia4sik.github.io/Walchen_Lake_React/api/picks.json')
    .then(response => response.json())
    .catch(error => {
      console.error(error);
      return [];
    });
}

export function getMountains(): Promise<Mountain[]> {
  return fetch('https://anastasia4sik.github.io/Walchen_Lake_React/api/mountains.json')
    .then(response => response.json())
    .catch(error => {
      console.error(error);
      return [];
    });
}