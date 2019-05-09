import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';
import { HeroService } from '../hero.service';
import { Router } from "@angular/router";

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
account: string;
// selectedHero: Hero;

// onSelect(h: Hero): void {
//   this.selectedHero = h;
// }

getHeroes(): void {
  
  this.heroService.getHeroes()
      .subscribe(heroes => this.hs = heroes);
}

goAccount(): void {
    localStorage.setItem('a', this.account);
    this.router.navigate(['/account'])
  }

  constructor(
    private heroService: HeroService,
    private router: Router
    ) { }

  ngOnInit() {
    this.getHeroes();
  }

}