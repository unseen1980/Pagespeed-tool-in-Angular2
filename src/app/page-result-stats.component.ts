import { Component, Input } from 'angular2/core';
import { ValuesPipe } from './pipes/obj-loop.pipe';
import { KeysPipe } from './pipes/obj-to-array.pipe';
import { ByteConversionPipe } from './pipes/byte-conversion.pipe';

@Component({
    selector: 'page-result-stats',
    template: `
    <div class="row">
      <div class="col s12 m6 l3" *ngFor="#card of cards">
        <div class="card-panel teal lighten-2" style="min-height:250px;">
          <ul>
            <li *ngFor="#info of card | keys">
                <div class="center-align" *ngIf="info.key === 'icon'" style="padding-bottom: 20px;">
                    <i class="large material-icons white-text">{{info.value}}</i>
                </div>
                <div>
                    <span class="white-text" *ngIf="info.key !== 'icon'">
                    {{info.key}}: 
                    <span *ngIf="useByteConversion(info.value)">{{info.value | byteconvert}}</span>
                    <span *ngIf="!useByteConversion(info.value)">{{info.value}}</span>
                    </span>
                </div>
            </li>
          </ul>          
        </div>
      </div>
    </div>
    `,
    pipes: [ValuesPipe, ByteConversionPipe, KeysPipe]
})
export class PageResultsStatsComponent {
    @Input() cards;
    constructor() { }

    useByteConversion(val) {
        return val > 2000;
    }
}