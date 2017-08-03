import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="main-content content margin-top">
      <div class="row-padding main-header">
        <h1>{{ title[0] }}<span class="light">{{ title[1] }}</span></h1>
      </div>
      <div class="row-padding">
        <router-outlet></router-outlet>
      </div>
    </div>

    <footer class="container text-grey center margin-top">
      <p>Made with passion by <a href="https://github.com/drivas" target="_blank">@drivas</a></p>
    </footer>
  `
})
export class AppComponent {
  title = ['APP', 'LIST'];
}
