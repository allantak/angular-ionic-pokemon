import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private urlPokemon = 'https://pokeapi.co/api/v2/pokemon/';
  constructor(private http: HttpClient) { }

  getAllPokemon() {
    return this.http.get(this.urlPokemon).toPromise();
  }

  getPokemon(url){
    return this.http.get(url).toPromise();
  }

  searchPokemon(id) {
    return this.http.get(this.urlPokemon + id).toPromise();
  }
}
