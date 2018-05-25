import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'team'
})
export class TeamPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    return null;
  }
}
