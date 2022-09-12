import { Component, Input, OnInit } from '@angular/core';

export interface IPokemonDataCard {
  id: number;
  name: string;
  types: IPokemonTypes[];
  sprites: IPokemonImg;
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
          // eslint-disable-next-line @typescript-eslint/naming-convention
          front_default: string;
        };
      };
    };
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

  constructor() { }

  ngOnInit() {
    console.log(this.pokemons);
    this.imgUrl = this.pokemons.sprites.versions['generation-v']['black-white'].animated.front_default;
  }

}
