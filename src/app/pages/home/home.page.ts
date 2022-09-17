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

  onToggleColorTheme(event) {
    if (event.detail.checked) {
      document.body.setAttribute('color-theme', 'dark');
    } else {
      document.body.setAttribute('color-theme', 'light');
    }
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
        this.servicePokemon.weebHook(pokemonRecord);
        return pokemonRecord;
      })
    );

    this.pokemon = allPokemon;
  }

  goTo(pokemon) {
    this.router.navigateByUrl('/detail', { state: { pokemons: pokemon } });
  }

  openSearch(search) {
    if (!search) {
      return;
    }
    this.servicePokemon.searchPokemon(search.toLowerCase())
      .then((res: object) => {
        this.router.navigateByUrl('/detail', { state: { pokemons: res } });
        this.servicePokemon.weebHook(res);
        this.notFound = false;
        this.search = '';
      })
      .catch(() => {
        this.notFound = true;
        this.search = '';
      });
  }
}
