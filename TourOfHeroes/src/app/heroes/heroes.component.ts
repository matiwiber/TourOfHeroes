import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';


@Component({
  //Selector is who indicates the tag to show in the app component
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = [];
  selectedHero?: Hero;

  constructor(private heroService: HeroService, private messaggeService:
    MessageService) { }

  /* Create a method to retrieve the heroes from the service. */
  getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
  }
  /* Call inside of Oninit to initiate to a ppropriate time */
  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.messaggeService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  }

  
}
