import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { AppListService } from './app-list.service';

@Component({
  selector: 'app-detail',
  template: `
    <div class="third">
      <div class="white text-grey card">
        <header class="app-icon">
          <img src="{{ app?.icon_img || 'assets/img/default-app.png' }}" alt="App image">
        </header>
      </div>
    </div>

    <div class="twothird">
      <div class="container card white margin-bottom">
        <h2 class="text-grey padding-16">
          <i class="fa fa-cubes fa-fw margin-right xxlarge text-teal"></i>{{ (app?.display_name || '') | humanize }}
        </h2>

        <div class="container" *ngIf="app?.banner_img">
          <img [src]="app?.banner_img" alt="Banner" style="width: 100%;">
        </div>

        <div class="container">
          <h5 class="opacity"><b>Description</b></h5>
          <div [innerHTML]="(app?.description_html || '') | keepHtml"></div>
          <hr>
        </div>

        <p>
          <button class="button round blue" [routerLink]="['/list']">Back</button>
        </p>
      </div>
    </div>
  `,
  styles: []
})
export class DetailComponent implements OnInit {

  app: any;

  constructor(private appListService: AppListService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.appListService.getAppData().subscribe(
        data => {
          const filteredApp = data.data.children.filter(app => app.data.id === params['id']);
          this.app = filteredApp.length ? filteredApp[0].data : {};

          console.log(this.app);
        },
        err => {
          console.log('Something went wrong!');
        }
      );
    });
  }
}
