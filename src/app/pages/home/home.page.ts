import { Component, OnInit } from '@angular/core';
import { IPokemonDataCard } from 'src/app/components/card/card.component';
import { PokemonService } from 'src/app/services/pokemon.service';
import { DataService, Message } from '../../services/data.service';

interface Result {
  results: object[];
  previous?: string;
  next?: string;
}

interface ListPokemon {
  name: string;
  url: string;
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage implements OnInit {

  objectPokemon: object;
  prevUrl: string;
  nextUrl: string;
  pokemon: any[];

  constructor(
    private servicePokemon: PokemonService
  ) {
  }

  ngOnInit() {
    this.getAllPokemon();
  }

  refresh(ev) {
    setTimeout(() => {
      ev.detail.complete();
    }, 3000);
  }

  getAllPokemon() {
    this.servicePokemon.getAllPokemon().then((allPokemon: Result) => {
      this.loadPokemon(allPokemon.results);
      this.prevUrl = allPokemon.previous;
      this.nextUrl = allPokemon.next;
    });
  }

  async prevPokemon() {
    if(!this.prevUrl){
      return;
    }
    this.servicePokemon.getPokemon(this.prevUrl).then((data: Result)=>{
      this.loadPokemon(data.results);
      this.prevUrl = data.previous;
      this.nextUrl = data.next;
    });
  }

  async nextPokemon() {
    this.servicePokemon.getPokemon(this.nextUrl).then((data: Result)=>{
      this.loadPokemon(data.results);
      this.prevUrl = data.previous;
      this.nextUrl = data.next;
    });
  }

  async loadPokemon(data: object[]) {
    const allPokemon = await Promise.all(
      data.map(async (listPokemon: ListPokemon) => {
        const pokemonRecord = await this.servicePokemon.getPokemon(listPokemon.url);
        return pokemonRecord;
      })
    );
    this.pokemon = allPokemon;
  }
}
