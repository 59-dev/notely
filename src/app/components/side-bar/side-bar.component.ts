import { TagPlaceholder } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { NotebookService } from 'src/app/services/notebook.service';
import { Page } from 'src/models/page';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
    styleUrls: ['../../app.component.css']
})
export class SideBarComponent implements OnInit {

  constructor(private notebookService: NotebookService) { }
  
    notebook$: Observable<Page[]>;

    ngOnInit() {
        this.notebook$ = this.notebookService.notebook$;
    }

}
