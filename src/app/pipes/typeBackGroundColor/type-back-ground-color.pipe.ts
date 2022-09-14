import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'typeBackGroundColor'
})
export class TypeBackGroundColorPipe implements PipeTransform {

  transform(value: string): string {
    switch (value) {
      case 'bug':
        return '#f8d5a3';
      case 'dragon':
        return '#97b3e6';
      case 'fairy':
        return '#fceaff';
      case 'fire':
        return '#FDDFDF';
      case 'ghost':
        return '#BAA5DD';
      case 'ground':
        return '#f4e7da';
      case 'normal':
        return '#F5F5F5';
      case 'psychic':
        return '#FCB8E0';
      case 'steel':
        return '#BFFFD9';
      case 'dark':
        return '#EBE8E8';
      case 'electric':
        return '#FCF7DE';
      case 'fighting':
        return '#E6E0D4';
      case 'flying':
        return '#F5F5F5';
      case 'grass':
        return '#DEFDE0';
      case 'ice':
        return '#ADECFF';
      case 'poison':
        return '#98d7a5';
      case 'rock':
        return '#d5d5d4';
      case 'water':
        return '#DEF3FD';
    }
  }

}
