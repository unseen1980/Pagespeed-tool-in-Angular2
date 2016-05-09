import { Component } from '@angular/core';
import {Router, RouteConfig, RouterOutlet} from '@angular/router-deprecated';
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