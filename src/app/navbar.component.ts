import {Component} from 'angular2/core';
import {RouterLink} from 'angular2/router';

@Component({
    selector: 'navbar',
    template: `
    <nav>
        <div class="nav-wrapper teal lighten-2">
            <a [routerLink]="['Home']" class="brand-logo">Seotrimo</a>
            
        </div>
    </nav>
  `,
  directives: [RouterLink]
})

export class NavbarComponent {
}
