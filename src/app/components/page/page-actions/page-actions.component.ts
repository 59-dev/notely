import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { NotebookService } from 'src/app/services/notebook.service';
import { Page } from 'src/models/page';

@Component({
    selector: 'app-page-actions',
    templateUrl: './page-actions.component.html',
    styleUrls: ['./page-actions.component.css']
})
export class PageActionsComponent implements OnInit {

    @Input() page: Page;
    @Output() editClick = new EventEmitter<any>();
    @Output() deleteClick = new EventEmitter<any>();

    constructor() { }

    ngOnInit() {
    }

    editPage() {
        this.editClick.emit();
    }

    deletePage() {
        this.deleteClick.emit();
    }

}
