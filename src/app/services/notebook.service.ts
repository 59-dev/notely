import { Injectable } from '@angular/core';
import { Notebook } from '../../models/notebook';
import { Page } from "src/models/page";
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotebookService {

    pages: Page[] = new Array<Page>();
    notebookBehaviorSubject = new BehaviorSubject([]);
    notebook$ = this.notebookBehaviorSubject.asObservable();
    currentPage = new Subject();

    constructor() {
        Array.from(Array(5)).forEach((x, i) => {
            this.pages.push(new Page(i))
        });

        this.notebookBehaviorSubject.next(this.pages);
    }

    selectPage(index: number) {
        this.currentPage.next(index);
    }


}
