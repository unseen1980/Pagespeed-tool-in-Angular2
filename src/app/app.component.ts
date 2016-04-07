import {Component} from 'angular2/core';
import {ResultComponent} from './result';
import {Http, Headers, HTTP_PROVIDERS, URLSearchParams} from 'angular2/http';
import {PageSpeed} from './page-speed';
import {NavbarComponent} from './navbar.component';
import {FooterComponent} from './footer.component';
import {PreloaderComponent} from './preloader.component';

@Component({
  selector: 'my-app',
  template: `
  <header>
    <navbar></navbar>
  </header>
  <main style="min-height: 80%;">
    <div class="container">
        <div class="row" style="padding-top:3%">
            <form class="col s6 offset-s3" 
                [hidden]="hasResults" (ngSubmit)="onSubmit(inputUrl)" *ngIf="!showPreloader">
                <div class="row">
                    <div class="input-field">
                        <input id="first_name" type="text" #inputUrl class="validate">
                        <label for="first_name">Website Url</label>
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
   <foot></foot>
  `,
  directives: [ResultComponent, NavbarComponent, FooterComponent, PreloaderComponent],
  providers: [PageSpeed]
})

export class AppComponent {
  showPreloader = false;
  hasResults = false;
  readyResult = {};
  constructor(public pageSpeed: PageSpeed) {
  }
  onSubmit(url) {
    let urlVal = url.value;
    this.showPreloader = true;
    this.pageSpeed.getResult(urlVal)
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
