import { Pipe, PipeTransform } from 'angular2/core';

@Pipe({
    name: 'keys'
})

export class KeysPipe implements PipeTransform {
    transform(value, args: string[]): any {
        let keys = [];
        for (let key in value) {
            if (value.hasOwnProperty(key)) {
                keys.push({ key: key, value: value[key] });
            }
        }
        return keys;
    }
}