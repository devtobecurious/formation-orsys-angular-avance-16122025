import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toNbItems',
  pure: true
})
export class ToNbItemsPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): number {
    return 3;
  }

}
