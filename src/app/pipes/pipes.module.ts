import { StatsColorPipe } from './statsColor/stats-color.pipe';
import { ProgressBarPipe } from './progressBar/progress-bar.pipe';
import { TypeBackGroundColorPipe } from './typeBackGroundColor/type-back-ground-color.pipe';
import { TypeColorPipe } from './typeColor/type-color.pipe';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    TypeColorPipe,
    TypeBackGroundColorPipe,
    ProgressBarPipe,
    StatsColorPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TypeColorPipe,
    TypeBackGroundColorPipe,
    ProgressBarPipe,
    StatsColorPipe
  ],
})
export class PipesModule { }
