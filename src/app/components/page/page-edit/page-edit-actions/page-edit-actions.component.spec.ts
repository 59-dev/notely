import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageEditActionsComponent } from './page-edit-actions.component';

describe('PageEditActionsComponent', () => {
  let component: PageEditActionsComponent;
  let fixture: ComponentFixture<PageEditActionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageEditActionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageEditActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
