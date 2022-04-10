import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'numToWord'
})
export class NumToWordPipe implements PipeTransform {

    transform(value: number, capitalFirstLetter?: boolean): string {
        const words = ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten"];
        if(value < 0 || value > 10) {
            return value.toString();
        }
        return capitalFirstLetter ? words[value] : words[value].toLowerCase();
    }

    // transform(value: number, capitalFirstLetter?: boolean): string {
    //     const words = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten"];
    //     if(value < 0 || value > 10) {
    //         return value.toString();
    //     }
    //     if(!capitalFirstLetter) {
    //         return words[value];
    //     }
    //     return words[value][0].toUpperCase() + words[value].substring(1);
    // }

}
