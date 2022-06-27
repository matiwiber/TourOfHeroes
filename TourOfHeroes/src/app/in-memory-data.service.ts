import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 12, name: 'FALCAAN' },
      { id: 13, name: 'Raylay' },
      { id: 14, name: 'LordComandor' },
      { id: 15, name: 'Violeta La Sucia' },
      { id: 16, name: 'CAVALOK' },
      { id: 17, name: 'Frodis' },
      { id: 18, name: 'Super Cartucho' },
      { id: 19, name: 'Ramiro Ramirez' },
      { id: 20, name: 'Julian Park' }
    ];
    return {heroes};
  }

   /* Overrides the genId method to ensure that a hero always has an id.
   If the heroes array is empty,
   the method below returns the initial number (11).
   if the heroes array is not empty, the method below returns the highest
   hero id + 1. */
   
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}