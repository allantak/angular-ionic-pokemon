import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private urlPokemon = 'https://pokeapi.co/api/v2/pokemon/';
  private urlWeebHook = 'https://webhook.site/96dbaa12-b84d-4ed6-a13f-a7746a020b84';
  constructor(private http: HttpClient) {
  }

  getAllPokemon() {
    return this.http.get(this.urlPokemon).toPromise();
  }

  getPokemon(url) {
    return this.http.get(url).toPromise();
  }

  searchPokemon(id) {
    return this.http.get(this.urlPokemon + id).toPromise();
  }
}
