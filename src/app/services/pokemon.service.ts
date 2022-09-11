import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

interface Result {
  results: object[];
  prev: string;
  next: string;
}
@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private urlPokemon = 'https://pokeapi.co/api/v2/pokemon/';
  constructor(private http: HttpClient) { }

  getAllPokemon() {
    return this.http.get(this.urlPokemon).toPromise().then((resp: Result) => resp.results);
  }
}
