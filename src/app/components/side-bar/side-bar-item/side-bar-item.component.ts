import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-side-bar-item',
  templateUrl: './side-bar-item.component.html',
    styleUrls: ['../../../app.component.css']
})
export class SideBarItemComponent implements OnInit {

  constructor() { }

  @Input() name: string;
  @Input() idx: number;
  pageId: string;

  ngOnInit() {
  }

  ngOnChanges() {
      this.pageId = "page_" + this.idx;
  }

}
