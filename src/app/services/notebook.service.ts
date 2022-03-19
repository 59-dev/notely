import { Injectable } from '@angular/core';
import { Notebook } from '../../models/notebook';
import { Page } from "src/models/page";
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class NotebookService {

    pages: Page[] = new Array<Page>();
    notebookBehaviorSubject: BehaviorSubject<Page[]> = new BehaviorSubject([]);
    notebook$ = this.notebookBehaviorSubject.asObservable();
    currentPageBehaviorSubject = new BehaviorSubject(undefined);
    currentPage$ = this.currentPageBehaviorSubject.asObservable();

    constructor() {
        Array.from(Array(5)).forEach((x, i) => {
            this.pages.push(new Page(i))
        });

        this.notebookBehaviorSubject.next(this.pages);
        this.currentPageBehaviorSubject.next(this.pages[0]);
    }

    setCurrentPage(id: number) {
        let _page = this.pages.find(x => x.id === id);
        this.currentPageBehaviorSubject.next(_page);
    }
}
