import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NotebookService } from 'src/app/services/notebook.service';
import { CRUD } from 'src/models/enums/crud-enum';
import { Page } from 'src/models/page';
import _ from "lodash";

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
    _page: Page;

    constructor(private notebookService: NotebookService) {
    }

    ngOnInit() {
        this._page = _.cloneDeep(this.page);
    }

    onSaveClick() {
        this.notebookService.savePage(this._page);
    }

    onCancelClick() {
        this.notebookService.setCrudState(CRUD.READ);
    }

}
