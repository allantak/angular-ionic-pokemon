import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card.component';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import colorBack from 'src/app/helper/colorBack';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    CardComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule
  ],
  exports: [CardComponent]
})
export class CardModule { }
