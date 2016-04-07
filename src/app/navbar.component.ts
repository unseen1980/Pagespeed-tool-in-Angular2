import {Component} from 'angular2/core';

@Component({
  selector: 'navbar',
  template: `
    <nav>
    <div class="nav-wrapper teal lighten-2">
      <a href="#!" class="brand-logo">Seotrimo</a>
      <a href="#" data-activates="mobile-demo" class="button-collapse"><i class="material-icons">menu</i></a>
      <ul class="right hide-on-med-and-down">
        <li><a href="#">About</a></li>
        <li><a href="#">contact</a></li>
      </ul>
      <ul class="side-nav" id="mobile-demo">
        <li><a href="#">About</a></li>
        <li><a href="#">contact</a></li>
      </ul>
    </div>
  </nav>
  `
})

export class NavbarComponent {
}
