import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { NotebookService } from 'src/app/services/notebook.service';
import { CRUD } from 'src/models/enums/crud-enum';
import { Page } from 'src/models/page';

@Component({
    selector: 'app-page',
    templateUrl: './page.component.html',
    styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {

    constructor(private notebookService: NotebookService) { }

    page$: Observable<Page>;
    crudState$: Observable<any>;
    crud = CRUD;

    ngOnInit() {
        this.page$ = this.notebookService.currentPage$;
        this.crudState$ = this.notebookService.crudState$;
    }

    ngOnChanges() {

    }
}
