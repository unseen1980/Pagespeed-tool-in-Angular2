import { Component} from 'angular2/core';
import {ResultComponent} from './result';
import {PreloaderComponent} from './preloader.component';
import {PageSpeed} from './page-speed';

@Component({
    selector: 'home',
    template: `  
    <main style="min-height: 80%;">
        <div class="container">
            <div class="row" style="padding-top:3%">
                <form class="col s8 offset-s2 m10 offset-m1" 
                    [hidden]="hasResults" 
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
                <result [res]="readyResult"></result>
            </div>
        </div>
    </main>
    `,
    directives: [ResultComponent, PreloaderComponent],
    providers: [PageSpeed]
})
export class HomeComponent {
    showPreloader = false;
    hasResults = false;
    readyResult = {};
    constructor(private _pageSpeed: PageSpeed) {
    }
    onSubmit(url) {
        let urlVal = url.value.replace('http://', '').replace('https://', '');
        this.showPreloader = true;
        this._pageSpeed.getResult(urlVal)
            .subscribe(
            (data) => {
                console.log(data);
                this.showPreloader = false;
                this.hasResults = true;
                this.readyResult = data;
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