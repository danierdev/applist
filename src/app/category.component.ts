import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-category',
  template: `
    <div class="white text-grey card-2">
      <div class="container">
        <p class="large">
          <b><i class="fa fa-hashtag fa-fw text-teal"></i>Categories</b>
        </p>
        <p *ngFor="let cat of categories">
          <a [routerLink]="['/list']" [queryParams]="{cat: cat}" routerLinkActive="active">{{ cat | humanize }}</a>
        </p>
      </div>
    </div>
  `
})
export class CategoryComponent {
  @Input()
  categories: any[] = [];
}
