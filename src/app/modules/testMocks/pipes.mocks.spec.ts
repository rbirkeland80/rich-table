import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dynamicPipe'
})
export class MockDynamicPipe implements PipeTransform {

    transform(value: number): number {
    return value;
  }

}
