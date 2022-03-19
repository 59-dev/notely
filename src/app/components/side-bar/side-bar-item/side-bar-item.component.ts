import { Component, OnInit, Input} from '@angular/core';
import { Page } from "src/models/page";

@Component({
  selector: 'app-side-bar-item',
  templateUrl: './side-bar-item.component.html',
    styleUrls: ['../../../app.component.css']
})
export class SideBarItemComponent implements OnInit {

  constructor() { }

  @Input() page: Page;

  ngOnInit() {
  }
}
