import { IPokemonDataCard } from 'src/app/components/card/card.component';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService, Message } from '../../services/data.service';

@Component({
  selector: 'app-view-message',
  templateUrl: './view-message.page.html',
  styleUrls: ['./view-message.page.scss'],
})
export class ViewMessagePage implements OnInit {
  pokemons: IPokemonDataCard;
  imgUrl: any;
  constructor(
    private data: DataService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) {
    this.pokemons = this.router.getCurrentNavigation().extras.state.pokemons;
    this.imgUrl = this.pokemons.sprites.versions['generation-v']['black-white'].animated.front_default;
    console.log(this.pokemons);
  }


  ngOnInit() {
  }

  getBackButtonText() {
    const win = window as any;
    const mode = win && win.Ionic && win.Ionic.mode;
    return mode === 'ios' ? 'Inbox' : '';
  }
}
