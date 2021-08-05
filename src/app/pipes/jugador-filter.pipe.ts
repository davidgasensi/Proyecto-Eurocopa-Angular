import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'jugadorFilter'
})
export class JugadorFilterPipe implements PipeTransform {


  transform(value: any[], filterBy: string): any {


}
}

