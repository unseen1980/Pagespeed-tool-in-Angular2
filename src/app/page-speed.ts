import {Injectable} from 'angular2/core';
import {Http, Response} from 'angular2/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PageSpeed {
  result = {};
  constructor(private http: Http) { };

  getResult(query) {
    const endpoint = 'https://www.googleapis.com/pagespeedonline/v2/runPagespeed?url=http%3A%2F%2F' + query;
    return this.http
      .get(endpoint)
      .map(res => res.json());
  }

  setResult(resObj) {
    this.result = resObj;
  }
}
