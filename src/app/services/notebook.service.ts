import { Injectable } from '@angular/core';
import { Page } from "src/models/page";
import { BehaviorSubject, Subject } from 'rxjs';
import { CRUD } from 'src/models/enums/crud-enum';
import _ from "lodash";

@Injectable({
    providedIn: 'root'
})
export class NotebookService {

    pages: Page[] = new Array<Page>();
    notebookBehaviorSubject: BehaviorSubject<Page[]> = new BehaviorSubject([]);
    notebook$ = this.notebookBehaviorSubject.asObservable();
    currentPageBehaviorSubject = new BehaviorSubject(undefined);
    currentPage$ = this.currentPageBehaviorSubject.asObservable();
    crudStateBehaviorSubject = new BehaviorSubject(CRUD.READ);
    crudState$ = this.crudStateBehaviorSubject.asObservable();


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

    setCrudState(state: CRUD) {
        this.crudStateBehaviorSubject.next(state);
    }

    savePage(page: Page) {
        var index = _.findIndex(this.pages, { id: page.id });
        this.pages.splice(index, 1, page);

        this.notebookBehaviorSubject.next(this.pages);
        
        this.setCurrentPage(page.id);
        this.setCrudState(CRUD.READ);
    }
}
