import {Component} from 'angular2/core';

@Component({
  selector: 'preloader',
  template: `
  <div class="preloader-wrapper big active">
    <div class="spinner-layer spinner-green-only">
      <div class="circle-clipper left">
        <div class="circle"></div>
      </div><div class="gap-patch">
        <div class="circle"></div>
      </div><div class="circle-clipper right">
        <div class="circle"></div>
      </div>
    </div>
  </div>
  `
})

export class PreloaderComponent {
}