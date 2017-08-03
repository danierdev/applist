import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail',
  template: `
    <div class="third">
      <div class="white text-grey card">&nbsp;</div>
    </div>

    <div class="twothird">
      <div class="container card white margin-bottom">
        <h2 class="text-grey padding-16">
          <i class="fa fa-suitcase fa-fw margin-right xxlarge text-teal"></i>Work Experience
        </h2>
        <div class="container">
          <h5 class="opacity"><b>Front End Developer / w3schools.com</b></h5>
          <h6 class="text-teal">
            <i class="fa fa-calendar fa-fw margin-right"></i>Jan 2015 - <span class="tag teal round">Current</span>
          </h6>
          <p>Lorem ipsum dolor sit amet. Praesentium magnam consectetur vel in deserunt aspernatur est reprehenderit
            sunt hic. Nulla tempora soluta ea et odio, unde doloremque repellendus iure, iste.</p>
          <hr>
        </div>
        <div class="container">
          <h5 class="opacity"><b>Web Developer / something.com</b></h5>
          <h6 class="text-teal"><i class="fa fa-calendar fa-fw margin-right"></i>Mar 2012 - Dec 2014</h6>
          <p>Consectetur adipisicing elit. Praesentium magnam consectetur vel in deserunt aspernatur est reprehenderit
            sunt hic. Nulla tempora soluta ea et odio, unde doloremque repellendus iure, iste.</p>
          <hr>
        </div>
        <div class="container">
          <h5 class="opacity"><b>Graphic Designer / designsomething.com</b></h5>
          <h6 class="text-teal"><i class="fa fa-calendar fa-fw margin-right"></i>Jun 2010 - Mar 2012</h6>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p><br>
        </div>
      </div>
    </div>
  `,
  styles: []
})
export class DetailComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
