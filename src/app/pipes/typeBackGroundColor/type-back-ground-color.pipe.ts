import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'typeBackGroundColor'
})
export class TypeBackGroundColorPipe implements PipeTransform {

  transform(value: string): string {
    switch (value) {
      case 'bug':
        return '#A6B91A';
      case 'dragon':
        return '#6F35FC';
      case 'fairy':
        return '#D685AD';
      case 'fire':
        return '#EE8130';
      case 'ghost':
        return '#735797';
      case 'ground':
        return '#E2BF65';
      case 'normal':
        return '#A8A77A';
      case 'psychic':
        return '#F95587';
      case 'steel':
        return '#B7B7CE';
      case 'dark':
        return '#705746';
      case 'electric':
        return '#F7D02C';
      case 'fighting':
        return '#C22E28';
      case 'flying':
        return '#A98FF3';
      case 'grass':
        return '#7AC74C';
      case 'ice':
        return '#96D9D6';
      case 'poison':
        return '#A33EA1';
      case 'rock':
        return '#B6A136';
      case 'water':
        return '#6390F0';
    }
  }

}
