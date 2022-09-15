/* eslint-disable @typescript-eslint/naming-convention */
import { Component, Input, OnInit } from '@angular/core';
import { TypeColorPipe } from './../../pipes/typeColor/type-color.pipe';
import { IPokemon } from './../../models/pokemon';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() pokemons: IPokemon;
  imgUrl: any;
  colorType: any;
  moreColorType: any;

  constructor(private pipeColorType: TypeColorPipe) { }

  ngOnInit() {
    this.imgUrl = this.pokemons.sprites.versions['generation-v']['black-white'].animated.front_default;
    this.colorType = this.pipeColorType.transform(this.pokemons.types[0].type.name);
  }
}
