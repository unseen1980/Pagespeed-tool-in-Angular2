import {Component} from 'angular2/core';
import {NavbarComponent} from './navbar.component';
import {FooterComponent} from './footer.component';
import {ContactComponent} from './contact.component';
import {HomeComponent} from './home.component';
import {CheckComponent} from './check.component';
import {RouteConfig, RouterOutlet} from 'angular2/router';
import {PageSpeed} from '../services/page-speed.service';


@RouteConfig([
    { path: '/...', name: 'Home', component: CheckComponent },
    { path: '/contact', name: 'Contact', component: ContactComponent },
    { path: '/*other', name: 'Other', component: HomeComponent }
])
@Component({
    selector: 'my-app',
    template: `
    <header>
        <navbar></navbar>
    </header>
    <router-outlet></router-outlet>
    <foot></foot>
  `,
    directives: [NavbarComponent, FooterComponent, RouterOutlet, CheckComponent],
    providers: [PageSpeed]
})

export class AppComponent {
}
