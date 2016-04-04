import {Component, Input} from 'angular2/core';

@Component({
  selector: 'result',
  template: `
    <div class="row" *ngIf="res.id">
      <div class="col-md-12">
        <h2>Result</h2>
        <pre>
          {{res |json}}
        </pre>
      </div>
    </div>
  `
})

export class ResultComponent {
  @Input()
  res;
}
