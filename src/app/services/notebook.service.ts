import { Injectable } from '@angular/core';
import { Page } from "src/models/page";
import { BehaviorSubject, Subject } from 'rxjs';
import { CRUD } from 'src/models/enums/crud-enum';
import _ from "lodash";

@Injectable({
    providedIn: 'root'
})
export class NotebookService {

    notebookBehaviorSubject: BehaviorSubject<Page[]> = new BehaviorSubject([]);
    notebook$ = this.notebookBehaviorSubject.asObservable();
    currentPageBehaviorSubject = new BehaviorSubject(undefined);
    currentPage$ = this.currentPageBehaviorSubject.asObservable();
    crudStateBehaviorSubject = new BehaviorSubject(CRUD.READ);
    crudState$ = this.crudStateBehaviorSubject.asObservable();


    constructor() {
        let _pages = new Array<Page>();
        let _savedData = JSON.parse(sessionStorage.getItem("Notely"));

        if(_savedData !== null)
        {
            _pages = _.cloneDeep(_savedData);
        }
        else
        {
            _pages.push(new Page(1))
        }

        this.notebookBehaviorSubject.next(_pages);
        this.currentPageBehaviorSubject.next(_pages[0]);
    }

    setCurrentPage(id: number) {
        let _page = this.notebookBehaviorSubject.getValue().find(x => x.id === id);
        this.currentPageBehaviorSubject.next(_page);
    }

    setCrudState(state: CRUD) {
        this.crudStateBehaviorSubject.next(state);
    }

    addPage() {
        let _pages = this.notebookBehaviorSubject.getValue();
        if (_pages.length <= 4)
        {
            let ids = _pages.map(object => {
                return object.id;
            });

            let newId = Math.max.apply(null, ids) + 1;
            
            _pages.push(new Page(newId));

            this.saveData(_pages);
        }
    }

    savePage(page: Page) {
        let _pages = this.notebookBehaviorSubject.getValue();
        var index = _.findIndex(_pages, { id: page.id});

        page.name = page.name.trim();
        _pages.splice(index, 1, page);

        this.saveData(_pages);
        
        this.setCurrentPage(page.id);
        this.setCrudState(CRUD.READ);
    }

    deletePage(page: Page) {
        let _pages = this.notebookBehaviorSubject.getValue();
        if (_pages.length > 1)
        {
            _pages = _.filter(_pages, function (pages) {
                return pages.id !== page.id;
            });

            let _page = _pages[0];
            this.currentPageBehaviorSubject.next(_page);
            this.saveData(_pages);
        }
    }

    saveData(pages) {
        this.notebookBehaviorSubject.next(pages);
        sessionStorage.setItem('Notely', JSON.stringify(pages));
    }
}
