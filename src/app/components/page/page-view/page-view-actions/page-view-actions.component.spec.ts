import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageViewActionsComponent } from './page-view-actions.component';

describe('PageViewActionsComponent', () => {
  let component: PageViewActionsComponent;
  let fixture: ComponentFixture<PageViewActionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageViewActionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageViewActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
