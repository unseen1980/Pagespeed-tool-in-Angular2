import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'byteconvert'
})

export class ByteConversionPipe implements PipeTransform {
    transform(value: any, args: any): any {
        if (value === 0) {
            return 0;
        } else {
            let k = 1000,
                sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'],
                i = Math.floor(Math.log(value) / Math.log(k));
            return parseFloat((value / Math.pow(k, i)).toFixed(3)) + ' ' + sizes[i];
        }

    }
}