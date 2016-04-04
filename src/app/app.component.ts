import {Component} from 'angular2/core';
import {ResultComponent} from './result';
import {Http, Headers, HTTP_PROVIDERS, URLSearchParams} from 'angular2/http';
import {PageSpeed} from './page-speed';

@Component({
  selector: 'my-app',
  template: `
  <div class="container">
    <div class="row" style="padding-top:3%">
      <div class="col-md-6 col-md-offset-3">
        <div class="jumbotron">
          <form [hidden]="hasResults" class="col-lg-8" (ngSubmit)="onSubmit(inputUrl)">
            <div class="input-group">
              <input type="text" class="form-control" #inputUrl placeholder="Type a url..."/>
              <span class="input-group-btn">
                <button type="submit" class="btn btn-default">Go!</button>
              </span>
            </div>
          </form>
          <result [res]="readyResult"></result>
        </div>
      </div>
    </div>
  </div>
  `,
  directives: [ResultComponent],
  providers: [PageSpeed]
})

export class AppComponent {
  hasResults = false;
  readyResult = {};
  constructor(public pageSpeed: PageSpeed) {
  }
  onSubmit(url) {
    let urlVal = url.value;
    this.pageSpeed.getResult(urlVal)
      .subscribe(
      (data) => {
        console.log(data);
        this.hasResults = true;
        // this.pageSpeed.setResult(data);
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
