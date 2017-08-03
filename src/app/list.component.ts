import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { AppListService } from './app-list.service';

@Component({
  selector: 'app-list',
  template: `
    <div class="third">
      <app-category [categories]="categories"></app-category>
    </div>

    <div class="twothird">
      <div class="row-padding loading" *ngIf="loading">
        <p><i class="fa fa-circle-o-notch fa-spin fa-3x fa-fw"></i></p>
      </div>
      <div class="row-padding">
        <div class="third" *ngFor="let app of apps">
          <div class="card margin-bottom">
            <header class="app-icon">
              <img src="{{ app.data?.icon_img || 'assets/img/default-app.png' }}" alt="App image">
            </header>

            <footer class="container">
              <p><a [routerLink]="['/detail', app.data.id]">{{ app.data?.display_name | humanize }}</a></p>
            </footer>
          </div>
        </div>
      </div>
    </div>
  `
})
export class ListComponent implements OnInit {

  categories: string[] = [];

  apps: any[] = [];

  loading = false;

  constructor(private appListService: AppListService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.loading = true;

    this.route.queryParams.subscribe(params => {
      if ('cat' in params) {
        this.appListService.getAppData().subscribe(
          data => {
            const apps = data.data.children;
            this.apps = apps.filter(app => app.data.audience_target === params.cat);
            this.loading = false;
          },
          err => {
            console.log('Something went wrong!');
          }
        );
      }
    });

    this.appListService.getAppData().subscribe(
      data => {
        const apps = data.data.children;
        this.apps = apps;
        this.categories = apps.map(app => app.data.audience_target);
        this.loading = false;
      },
      err => {
        console.log('Something went wrong!');
      }
    );
  }
}
