import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { NotebookService } from 'src/app/services/notebook.service';
import { Page } from 'src/models/page';

@Component({
    selector: 'app-page',
    templateUrl: './page.component.html',
    styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {

    constructor(private notebookService: NotebookService) { }

    page$: Observable<Page>;

    ngOnInit() {
        this.page$ = this.notebookService.currentPage$;
        this.page$.subscribe(x => console.log(x));
    }

    ngOnChanges() {

    }

    onEditClick() {
        console.log("edit click");
    }

    onDeleteClick() {
        console.log("delete click");
    }

}
