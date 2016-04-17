import { Component} from 'angular2/core';
import {ResultComponent} from './result.component';
import {PreloaderComponent} from './preloader.component';
import {PageSpeed} from './page-speed';
import {Router, RouteConfig, RouterOutlet} from 'angular2/router';

@Component({
    selector: 'home',
    template: `  
    <main style="min-height: 80%;">
        <div class="container">
            <div class="row" style="padding-top:3%">
                <form class="col s8 offset-s2 m10 offset-m1"
                    (ngSubmit)="onSubmit(inputUrl)" 
                    *ngIf="!showPreloader">
                    <div class="row">
                        <div class="input-field">
                            <input id="url" type="text" #inputUrl class="validate">
                            <label for="url">Website Url</label>
                            <button class="btn waves-effect waves-light" type="submit" name="action">
                                Submit <i class="material-icons right">send</i>
                            </button>
                        </div>
                    </div>
                </form>
                <div class="col s2 offset-s5">
                    <preloader *ngIf="showPreloader"></preloader>
                </div>
            </div>
        </div>
    </main>
    `,
    directives: [ResultComponent, PreloaderComponent]
})
export class HomeComponent {
    showPreloader = false;
    constructor(private _pageSpeed: PageSpeed, private _router: Router) {
    }
    onSubmit(url) {
        let urlVal = url.value.replace('http://', '').replace('https://', '');
        this.showPreloader = true;
        this._pageSpeed.reqResult(urlVal)
            .subscribe(
            (data) => {
                this.showPreloader = false;
                this._pageSpeed.setResult(data);
                this._router.navigate(['Result']);
            },
            (err) => {
                console.log(err);
            },
            () => {
                console.log('Result Complete');
            }
            );
        url.value = '';
    }
}