import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'progressBar'
})
export class ProgressBarPipe implements PipeTransform {

  transform(value: number): number {
    return value / 255;
  }

}
