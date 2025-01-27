import { Pipe, PipeTransform } from "@angular/core";
import { DatePipe } from '@angular/common';
@Pipe({
    name:'display',
    standalone:true,
   })
   
export class DisplayFont implements PipeTransform{
    constructor(public dt:DatePipe){}
    transform(dis:{ name : string, date : Date}){
        
        return `${dis.name} logged in at ${this.dt.transform(dis.date.toDateString())}` ;
    }

}