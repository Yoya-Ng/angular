import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';
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

hs = HEROES;

selectedHero: Hero;
onSelect(h: Hero): void {
  this.selectedHero = h;
}

  constructor() { }

  ngOnInit() {
  }

}