import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CRUD } from 'src/models/enums/crud-enum';
import { Page } from 'src/models/page';

@Component({
  selector: 'app-page-view-actions',
  templateUrl: './page-view-actions.component.html',
  styleUrls: ['./page-view-actions.component.css']
})
export class PageViewActionsComponent implements OnInit {

    @Input() page: Page;
    @Output() editClick = new EventEmitter<any>();
    @Output() deleteClick = new EventEmitter<any>();
    CRUD = CRUD;

    constructor() {
    }

    ngOnInit() {
    }

    editPage() {
        this.editClick.emit();
    }

    deletePage() {
        this.deleteClick.emit();
    }

}