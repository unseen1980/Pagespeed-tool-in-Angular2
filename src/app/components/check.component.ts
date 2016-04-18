import { Component } from 'angular2/core';
import {Router, RouteConfig, RouterOutlet} from 'angular2/router';
import {ResultComponent} from './result.component';
import {HomeComponent} from './home.component';

@RouteConfig([
    { path: '/home', name: 'Home', component: HomeComponent, useAsDefault: true },
    { path: '/result', name: 'Result', component: ResultComponent }
])
@Component({
    template: `
    <router-outlet></router-outlet>
  `,
    directives: [RouterOutlet, HomeComponent, ResultComponent]
})
export class CheckComponent {
    constructor() { }
}