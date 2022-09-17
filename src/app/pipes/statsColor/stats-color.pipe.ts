import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'statsColor'
})
export class StatsColorPipe implements PipeTransform {

  transform(value: string): unknown {
    switch (value) {
      case 'hp':
        return '#fd7d24';
      case 'attack':
        return '#d56723';
      case 'defense':
        return '#eed535';
      case 'special-attack':
        return '#4592c4';
      case 'special-defense':
        return '#7AC74C';
      case 'speed':
        return '#f366b9';
    }
  }

}
