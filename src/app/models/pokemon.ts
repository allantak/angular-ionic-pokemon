/* eslint-disable @typescript-eslint/naming-convention */
export interface IPokemon {
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
