import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { ViewMessagePage } from './view-message.page';
import { ViewMessagePageRoutingModule } from './view-message-routing.module';
import { PipesModule } from './../../pipes/pipes.module';
import { TypeBackGroundColorPipe } from './../../pipes/typeBackGroundColor/type-back-ground-color.pipe';
import { ProgressBarPipe } from './../../pipes/progressBar/progress-bar.pipe';
import { TypeColorPipe } from './../../pipes/typeColor/type-color.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewMessagePageRoutingModule,
    PipesModule
  ],
  declarations: [
    ViewMessagePage,
  ],
  providers: [
    TypeColorPipe,
    ProgressBarPipe,
    TypeBackGroundColorPipe,
  ]
})
export class ViewMessagePageModule { }
