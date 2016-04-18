import {Component, Input} from 'angular2/core';
import {ResultHeaderComponent} from './result-header.component';
import {PageResultsStatsComponent} from './page-result-stats.component';
import {PageSpeed} from '../services/page-speed.service';
import {Router, RouteConfig, RouterOutlet} from 'angular2/router';

@Component({
    selector: 'result',
    template: `
    <div class="row" *ngIf="res.id">
      <div class="col s12 m12 l12" style="min-height: 80%;">
        <result-header [pagetitle]="res.title" [heading]="res.id"></result-header>
        <page-result-stats [cards]="statsChunks"></page-result-stats>        
      </div>
    </div>
  `,
    directives: [ResultHeaderComponent, PageResultsStatsComponent]
})

export class ResultComponent {
    res;
    statsChunks = [];
    constructor(private _pageSpeed: PageSpeed, private _router: Router) {
        this.res = this._pageSpeed.getResult();
        if (!this.res.id) {
            this._router.navigate(['Home']);
        }
        else {
            this.statsChunks.push(
                {
                    'icon': 'flash_on',
                    'Score': this.res.ruleGroups.SPEED.score + '/100',
                    'Response code': this.res.responseCode
                }, {
                    'icon': 'swap_vert',
                    'Html': this.res.pageStats.htmlResponseBytes,
                    'Css': this.res.pageStats.cssResponseBytes,
                    'JS': this.res.pageStats.javascriptResponseBytes
                }, {
                    'icon': 'swap_vert',
                    'Text': this.res.pageStats.textResponseBytes,
                    'Images': this.res.pageStats.imageResponseBytes,
                    'Other': this.res.pageStats.otherResponseBytes
                }, {
                    'icon': 'link',
                    'Css files': this.res.pageStats.numberCssResources,
                    'Js files': this.res.pageStats.numberJsResources,
                    'Static files': this.res.pageStats.numberStaticResources
                });
        }
    }
}
