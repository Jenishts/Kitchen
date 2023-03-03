import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './product';

@Pipe({
  name: 'searchProduct'
})
export class SearchProductPipe implements PipeTransform {

  transform(pipeData: any, pipeModifier: string): any {
    return pipeData.filter( (eachItem: any) => {
      return (
        eachItem['name'].toLowerCase().includes(pipeModifier.toLowerCase())
      )
    });
  }

}
