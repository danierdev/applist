import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  template: `
    <div class="third">
      <app-category [categories]="categories"></app-category>
    </div>

    <div class="twothird">
      <div class="row-padding">
        <div class="third">
          <div class="card container margin-buttom">
            <header class="container">
              APP_IMAGE
            </header>
            <footer class="container">
              <p>APP_NAME_1</p>
            </footer>
          </div>
        </div>
        <div class="third">
          <div class="card container margin-buttom">
            <header class="container">
              APP_IMAGE
            </header>
            <footer class="container">
              <p>APP_NAME_1</p>
            </footer>
          </div>
        </div>
        <div class="third">
          <div class="card container margin-buttom">
            <header class="container">
              APP_IMAGE
            </header>
            <footer class="container">
              <p>APP_NAME_1</p>
            </footer>
          </div>
        </div>
      </div>
    </div>
  `
})
export class ListComponent implements OnInit {

  categories: any[] = [];

  constructor() { }

  ngOnInit() { }
}
