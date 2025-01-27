import { Pipe, PipeTransform } from "@angular/core";
@Pipe({
    name:'temperature',
    standalone:true,
   
})
export class DisplayFont implements PipeTransform{
   transform(value : string | number, inputType : 'cel'|'fah', outputType ?: 'cel'|'fah' ){
        let val : number;
        if(typeof value === 'string'){
            val = parseFloat(value);
        }
        else {
            val = value;
        }
        let outputTemp: number;
        
        if(inputType === 'cel' ){
        outputTemp = val + 5;
        }
        else{
            outputTemp = val - 5;
        }
        let symbol : 'C' | 'F';
         symbol = 'C' ;
     return `${outputTemp}  ${symbol} ` ;
    
   }
}