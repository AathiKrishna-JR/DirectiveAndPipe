import { Pipe, PipeTransform } from "@angular/core";
@Pipe({
    name:'display',
    standalone:true
})
export class DisplayFont implements PipeTransform{
    transform(dis:{ name : string, date : Date}){
        return `${dis.name} +  logged in at +(${dis.date.toDateString()})`;
    }
}