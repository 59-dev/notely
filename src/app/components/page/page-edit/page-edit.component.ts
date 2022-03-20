import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NotebookService } from 'src/app/services/notebook.service';
import { CRUD } from 'src/models/enums/crud-enum';
import { Page } from 'src/models/page';

@Component({
    selector: 'app-page-edit',
    templateUrl: './page-edit.component.html',
    styleUrls: ['./page-edit.component.css']
})
export class PageEditComponent implements OnInit {

    @Input() page: Page;
    @Output() editClick = new EventEmitter<any>();
    @Output() deleteClick = new EventEmitter<any>();
    CRUD = CRUD;

    constructor(private notebookService: NotebookService) {
    }

    ngOnInit() {
    }

    onSaveClick() {
        this.notebookService.setCrudState(CRUD.READ);
    }

    onCancelClick() {
        this.notebookService.setCrudState(CRUD.READ);
    }

}
