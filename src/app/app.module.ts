import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TitleBarComponent } from './components/title-bar/title-bar.component';
import { LayoutComponent } from './components/layout/layout.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { SideBarItemComponent } from './components/side-bar/side-bar-item/side-bar-item.component';
import { PageComponent } from './components/page/page.component';
import { PageViewComponent } from './components/page/page-view/page-view.component';
import { PageEditComponent } from './components/page/page-edit/page-edit.component';
import { PageEditActionsComponent } from './components/page/page-edit/page-edit-actions/page-edit-actions.component';
import { PageViewActionsComponent } from './components/page/page-view/page-view-actions/page-view-actions.component';
import { FormsModule } from '@angular/forms';
import { AutosizeModule } from 'ngx-autosize'

@NgModule({
  declarations: [
    AppComponent,
    TitleBarComponent,
    LayoutComponent,
    SideBarComponent,
    SideBarItemComponent,
    PageComponent,
    PageViewComponent,
    PageEditComponent,
    PageEditActionsComponent,
    PageViewActionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AutosizeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
