import { Component } from '@angular/core';
import { Hero } from '../interfaces/hero';
import { HeroService } from '../hero.service';
import { OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router }   from '@angular/router';



@Component({
    moduleId: module.id,
    selector: 'heroes-list',
    providers: [HeroService],
    templateUrl: 'heroes.component.html',
    styleUrls: [ 'heroes.component.css' ],
})

export class HeroesComponent implements OnInit {

  selectedHero: Hero;
  heroes: Hero[];

  constructor(
    private router: Router,
    private heroService: HeroService) {}

  getHeroes(): void {
    this.heroService.getHeroes().then(result => this.heroes = result);
  }

  ngOnInit(): void {
    this.getHeroes()
  }

  onSelect(hero:Hero): void {
    this.selectedHero = hero
  }

  goToDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }

}
