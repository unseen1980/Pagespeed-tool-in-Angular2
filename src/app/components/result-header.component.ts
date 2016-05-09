import {Component, Input} from '@angular/core';

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
    ngOnInit() {
    }
}
