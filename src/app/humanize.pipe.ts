import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'humanize'
})
export class HumanizePipe implements PipeTransform {

  transform(text: string): string {
    return text.toString().toLowerCase()
      .replace(/[_-]/g, ' ')
      .replace(/(?:^|\s)\S/g, function(a) {
        return a.toUpperCase();
      });
  }

}
