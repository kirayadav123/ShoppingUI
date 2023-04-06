import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value : any[], filterString: string,PropName: string):any[]  {

    const result:any =[];
    if(!value || filterString===''|| PropName===''){
      return value;
    }
   value.forEach((a:any)=>{
    if(a[PropName].trim().toLowerCase().includes(filterString.toLowerCase())){
      result.push(a);
    }
   });
   return result;
  }

}
