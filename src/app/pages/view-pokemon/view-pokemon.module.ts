import { StatsColorPipe } from './../../pipes/statsColor/stats-color.pipe';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { ViewPokemonPage } from './view-pokemon.page';
import { ViewMessagePageRoutingModule } from './view-pokemon-routing.module';
import { PipesModule } from '../../pipes/pipes.module';
import { TypeBackGroundColorPipe } from '../../pipes/typeBackGroundColor/type-back-ground-color.pipe';
import { ProgressBarPipe } from '../../pipes/progressBar/progress-bar.pipe';
import { TypeColorPipe } from '../../pipes/typeColor/type-color.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewMessagePageRoutingModule,
    PipesModule
  ],
  declarations: [
    ViewPokemonPage,
  ],
  providers: [
    TypeColorPipe,
    ProgressBarPipe,
    TypeBackGroundColorPipe,
    StatsColorPipe
  ]
})
export class ViewMessagePageModule { }
