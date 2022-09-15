import { IPokemon } from './../../models/pokemon';
import { IResult, IListPokemon } from './../../models/listPokemon';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage implements OnInit {
  prevUrl: string;
  nextUrl: string;
  pokemon: any[];
  search: string;

  notFound = false;

  constructor(
    private servicePokemon: PokemonService,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.getAllPokemon();
  }

  refresh(ev) {
    console.log(ev);
  }

  getAllPokemon() {
    this.servicePokemon.getAllPokemon().then((allPokemon: IResult) => {
      this.loadPokemon(allPokemon.results);
      this.prevUrl = allPokemon.previous;
      this.nextUrl = allPokemon.next;
    });
  }

  async prevPokemon() {
    if (!this.prevUrl) {
      return;
    }
    this.servicePokemon.getPokemon(this.prevUrl).then((data: IResult) => {
      this.loadPokemon(data.results);
      this.prevUrl = data.previous;
      this.nextUrl = data.next;
    });
  }

  async nextPokemon() {
    this.servicePokemon.getPokemon(this.nextUrl).then((data: IResult) => {
      this.loadPokemon(data.results);
      this.prevUrl = data.previous;
      this.nextUrl = data.next;
    });
  }

  async loadPokemon(data: object[]) {
    const allPokemon = await Promise.all(
      data.map(async (listPokemon: IListPokemon) => {
        const pokemonRecord = await this.servicePokemon.getPokemon(listPokemon.url);
        return pokemonRecord;
      })
    );
    this.pokemon = allPokemon;
  }

  goTo(pokemon) {
    this.router.navigateByUrl('/detail', { state: { pokemons: pokemon } });
  }

  openSearch() {
    this.servicePokemon.searchPokemon(this.search.toLowerCase())
      .then((res) => {
        this.router.navigateByUrl('/detail', { state: { pokemons: res } });
        this.notFound = false;
      })
      .catch(() => this.notFound = true);
  }
}
