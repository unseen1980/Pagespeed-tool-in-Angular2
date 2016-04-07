import {Component, Input} from 'angular2/core';

@Component({
  selector: 'result-header',
  template: `
        <h4>{{heading}}</h4>
        <blockquote>
            {{pagetitle}}
        </blockquote>
  `
})

export class ResultHeaderComponent {
    @Input() heading;
    @Input() pagetitle;
    constructor() {
    }
}
