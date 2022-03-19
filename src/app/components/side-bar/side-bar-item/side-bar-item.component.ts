import { Component, OnInit, Input} from '@angular/core';
import { NotebookService } from 'src/app/services/notebook.service';
import { Page } from "src/models/page";

@Component({
  selector: 'app-side-bar-item',
  templateUrl: './side-bar-item.component.html',
    styleUrls: ['../../../app.component.css']
})
export class SideBarItemComponent implements OnInit {

  constructor(private notebookService: NotebookService) { }

  @Input() page: Page;

  ngOnInit() {
  }

  changeSelectedPage()
  {
      this.notebookService.setCurrentPage(this.page.id);
  }
}
