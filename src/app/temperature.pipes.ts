import { Pipe, PipeTransform } from "@angular/core";
@Pipe({
    name:'temperature',
    standalone:true,
   
})
export class temperature implements PipeTransform{
   transform(value : string | number | undefined, inputType : 'cel'|'fah', outputType ?: 'cel'|'fah' ){
        
    if(!value){
        return;
    }
    let val : number | string | undefined;
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
        
         
     return `${outputTemp}  F ` ;
    
   }
}