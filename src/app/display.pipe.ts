import { Pipe, PipeTransform } from "@angular/core";
@Pipe({
    name:'display',
    standalone:true
})
export class DisplayFont implements PipeTransform{
    transform(dis:{ value : string, date : Date}){
        return `${dis.value} (${dis.date.toDateString()})`;
    }
}