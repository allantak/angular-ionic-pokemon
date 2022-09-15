export interface IResult {
  results: object[];
  previous?: string;
  next?: string;
}

export interface IListPokemon {
  name: string;
  url: string;
}
