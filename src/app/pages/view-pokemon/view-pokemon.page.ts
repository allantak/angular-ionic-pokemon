import { TypeBackGroundColorPipe } from '../../pipes/typeBackGroundColor/type-back-ground-color.pipe';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IPokemon } from './../../models/pokemon';

@Component({
  selector: 'app-view-pokemon',
  templateUrl: './view-pokemon.page.html',
  styleUrls: ['./view-pokemon.page.scss'],
})
export class ViewPokemonPage implements OnInit {
  pokemons: IPokemon;
  imgUrl: string;
  colorNavbar: string;
  segmentValue = 'about';

  constructor(
    private router: Router,
    private pipeColorTypeBack: TypeBackGroundColorPipe,
  ) {
    this.pokemons = this.router.getCurrentNavigation().extras.state.pokemons;
    this.imgUrl = this.pokemons.sprites.versions['generation-v']['black-white'].animated.front_default;
    this.colorNavbar = this.pipeColorTypeBack.transform(this.pokemons.types[0].type.name);
  }

  ngOnInit() {
  }

  getBackButtonText() {
    const win = window as any;
    const mode = win && win.Ionic && win.Ionic.mode;
    return mode === 'ios' ? 'Inbox' : '';
  }

  segmentChanged(event) {
    this.segmentValue = event.detail.value;
  }
}
