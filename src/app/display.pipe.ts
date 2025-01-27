import { Pipe, PipeTransform } from "@angular/core";
@Pipe({
    name:'display',
    standalone:true
})
export class DisplayFont implements PipeTransform{
    transform(value : string){
        return value + ' transformed'
    }
}