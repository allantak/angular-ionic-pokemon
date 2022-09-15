import { TypeColorPipe } from './../../pipes/typeColor/type-color.pipe';
import { PipesModule } from './../../pipes/pipes.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card.component';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    CardComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule,
    PipesModule,
  ],
  exports: [CardComponent],
  providers: [
    TypeColorPipe
  ]
})
export class CardModule { }
