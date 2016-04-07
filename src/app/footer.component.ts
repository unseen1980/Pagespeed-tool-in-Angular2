import {Component} from 'angular2/core';

@Component({
  selector: 'foot',
  template: `
        <footer class="page-footer teal lighten-2">
          <div class="footer-copyright">
            <div class="container">
            © 2016 Copyright Text
            <a class="grey-text text-lighten-4 right" href="#!">More Links</a>
            </div>
          </div>
        </footer>
  `
})

export class FooterComponent {
}
