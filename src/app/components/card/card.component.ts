/* eslint-disable @typescript-eslint/naming-convention */
import { Component, HostListener, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import typeColors from 'src/app/helper/colorType';

export interface IPokemonDataCard {
  id: number;
  name: string;
  height: number;
  base_experience: number;
  weight: number;
  types: IPokemonTypes[];
  sprites: IPokemonImg;
  stats?: IPokemonStats[];
}

interface IPokemonTypes {
  slot: number;
  type: {
    name: string;
    url: string;
  };
}

interface IPokemonImg {
  versions: {
    'generation-v': {
      'black-white': {
        animated: {
          front_default: string;
        };
      };
    };
  };
}

interface IPokemonStats {
  base_stat: number;
  stat: {
    name: string;
  };
}

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() pokemons: IPokemonDataCard;
  imgUrl: any;
  colorType: any;
  moreColorType: any;

  constructor() { }

  ngOnInit() {
    this.imgUrl = this.pokemons.sprites.versions['generation-v']['black-white'].animated.front_default;
    this.colorType = typeColors[this.pokemons.types[0].type.name];
  }
}
