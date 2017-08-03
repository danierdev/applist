import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-category',
  template: `
    <div class="white text-grey card-2">
      <div class="container">
        <p class="large">
          <b><i class="fa fa-hashtag fa-fw text-teal"></i>Categories</b>
        </p>
        <p><a href="#">Games</a></p>
        <p><a href="#">Shopping</a></p>
        <p><a href="#">Educational</a></p>
        <p><a href="#">Health & Fitness</a></p>
        <p><a href="#">Entertainment</a></p>
        <p><a href="#">Business</a></p>
        <p><a href="#">Productivity</a></p>
      </div>
    </div>
  `,
  styles: []
})
export class CategoryComponent implements OnInit {

  @Input()
  categories: any[] = [];

  constructor() { }

  ngOnInit() {
  }

}
