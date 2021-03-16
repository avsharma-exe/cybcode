import { Pipe, PipeTransform } from '@angular/core';
import { element } from 'protractor';

@Pipe({
  name: 'convertSpace'
})
export class ConvertSpacePipe implements PipeTransform {

  transform(items:any,searchTerm:any) {
    let fl: any[] = [];
    // console.log(searchTerm)
    // console.log(items);
    if(searchTerm == ""){
      return items;
    }
    for(let i=0;i<items.length;i++){
      if(searchTerm.toLowerCase() == items[i].characterType.toLowerCase()){
        fl.push(items[i]);
      }
    }



    return fl;
  }

}
