import { Injectable } from '@angular/core';
import { Notebook } from '../../models/notebook';
import { Page } from "src/models/page";
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotebookService {

    pages: Page[] = new Array<Page>();
    notebookBehaviorSubject = new BehaviorSubject([]);
    notebook$ = this.notebookBehaviorSubject.asObservable();

    constructor() {
        Array.from(Array(5)).forEach((x, i) => {
            this.pages.push(new Page("Page " + (i + 1)))
        });

        this.notebookBehaviorSubject.next(this.pages);
    }
}
