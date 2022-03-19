import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
    styleUrls: ['../../app.component.css']
})
export class SideBarComponent implements OnInit {

  constructor() { }

  pages = Array();

  ngOnInit() {
      this.pages.push("One");
      this.pages.push("Two");
      this.pages.push("Three");
      this.pages.push("Four");
      this.pages.push("Five");
  }

}
