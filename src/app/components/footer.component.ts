import {Component} from 'angular2/core';
import {RouterLink} from 'angular2/router';

@Component({
    selector: 'foot',
    template: `
    <footer class="page-footer teal lighten-2">
        <div class="footer-copyright">
            <div class="container">
                © 2016 Copyright Text
                <a class="grey-text text-lighten-4 right" [routerLink]="['Contact']">Contact</a>
            </div>
        </div>
    </footer>
  `,
  directives: [RouterLink]
})

export class FooterComponent {
}
