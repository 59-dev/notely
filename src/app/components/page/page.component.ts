import { Component, OnInit } from '@angular/core';
import { NotebookService } from 'src/app/services/notebook.service';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {

  constructor(private notebookService: NotebookService) { }

  ngOnInit() {
  }

}
