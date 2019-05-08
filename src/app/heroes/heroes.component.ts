import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
// h = 'Win hero';

h: Hero = {
  id: 1,
  name: 'Windstorm'
};

// hs = HEROES;
hs: Hero[];

selectedHero: Hero;
onSelect(h: Hero): void {
  this.selectedHero = h;
}

getHeroes(): void {
  this.hs = this.heroService.getHeroes();
}

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

}