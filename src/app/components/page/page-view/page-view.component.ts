import { Component, OnInit } from '@angular/core';
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

	page$: Observable<Page>;

	ngOnInit() {
		this.page$ = this.notebookService.currentPage$;
		this.page$.subscribe(x => console.log(x));
	}

	ngOnChanges() {
		this.page$ = this.notebookService.currentPage$;
	}
}
