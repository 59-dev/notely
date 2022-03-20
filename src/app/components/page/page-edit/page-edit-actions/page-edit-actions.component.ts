import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Page } from 'src/models/page';

@Component({
    selector: 'app-page-edit-actions',
    templateUrl: './page-edit-actions.component.html',
    styleUrls: ['./page-edit-actions.component.css']
})
export class PageEditActionsComponent implements OnInit {

    @Input() page: Page;
    @Output() saveClick = new EventEmitter<any>();
    @Output() cancelClick = new EventEmitter<any>();

    constructor() { }

    ngOnInit() {
    }

    savePage() {
        this.saveClick.emit();
    }

    cancel() {
        this.cancelClick.emit();
    }
}
