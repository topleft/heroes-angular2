import { Injectable } from '@angular/core';
import { Hero } from './interfaces/hero';
import { HEROES } from './fixtures/mock-heroes';

@Injectable()
export class HeroService {

  getHeroes(): Promise<Hero[]> {
    return Promise.resolve(HEROES);
  }

  getHero(id): Promise<Hero> {
    return this.getHeroes()
             .then(heroes => heroes.find(hero => hero.id === id));
  }

}
