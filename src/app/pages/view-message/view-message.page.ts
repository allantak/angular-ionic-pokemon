import { TypeBackGroundColorPipe } from './../../pipes/typeBackGroundColor/type-back-ground-color.pipe';
import { TypeColorPipe } from './../../pipes/typeColor/type-color.pipe';
import { IPokemonDataCard } from 'src/app/components/card/card.component';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-message',
  templateUrl: './view-message.page.html',
  styleUrls: ['./view-message.page.scss'],
})
export class ViewMessagePage implements OnInit {
  pokemons: IPokemonDataCard;
  imgUrl: any;
  colorNavbar: any;
  segmentValue = 'about';
  colorType: string;

  constructor(
    private router: Router,
    private pipeColorType: TypeColorPipe,
    private pipeColorTypeBack: TypeBackGroundColorPipe,
  ) {
    this.pokemons = this.router.getCurrentNavigation().extras.state.pokemons;
    this.imgUrl = this.pokemons.sprites.versions['generation-v']['black-white'].animated.front_default;
    this.colorNavbar = '#ffff';
    this.colorNavbar = this.pipeColorType.transform(this.pokemons.types[0].type.name);
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
