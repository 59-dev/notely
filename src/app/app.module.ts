import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TitleBarComponent } from './components/title-bar/title-bar.component';
import { LayoutComponent } from './components/layout/layout.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { SideBarItemComponent } from './components/side-bar/side-bar-item/side-bar-item.component';
import { PageComponent } from './components/page/page.component';
import { PageActionsComponent } from './components/page/page-actions/page-actions.component';
import { PageViewComponent } from './components/page/page-view/page-view.component';

@NgModule({
  declarations: [
    AppComponent,
    TitleBarComponent,
    LayoutComponent,
    SideBarComponent,
    SideBarItemComponent,
    PageComponent,
    PageActionsComponent,
    PageViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
