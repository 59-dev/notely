import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { NotebookService } from 'src/app/services/notebook.service';
import { Page } from "src/models/page";

@Component({
	selector: 'app-page-view',
	templateUrl: './page-view.component.html',
	styleUrls: ['./page-view.component.css']
})
export class PageViewComponent implements OnInit {

	constructor(private notebookService: NotebookService) { }

	@Input() page: Page;

	ngOnInit() {
	}
}
