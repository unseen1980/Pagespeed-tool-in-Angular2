import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PageSpeed {
  private result = {};
  private _urlEndpoint = 'https://www.googleapis.com/pagespeedonline/v2/runPagespeed?url=http%3A%2F%2F';
  constructor(private _http: Http) { };

  reqResult(query) {
    return this._http
      .get(this._urlEndpoint + query)
      .map(res => res.json());
  }

  getResult() {
    return this.result;
  }

  setResult(res) {
    this.result = res;
  }

  resetResult() {
    this.result = {};
  }
}
