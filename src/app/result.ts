import {Component, Input} from 'angular2/core';
import {ResultHeaderComponent} from './result-header.component';


@Component({
  selector: 'result',
  template: `
    <div class="row" *ngIf="res.id">
      <div class="col-md-12">
        <result-header [pagetitle]="res.title" [heading]="res.id"></result-header>
        <pre>
          {{res |json}}
        </pre>
      </div>
    </div>
  `,
   directives: [ResultHeaderComponent]
})

export class ResultComponent {
  @Input()
  res;
}
