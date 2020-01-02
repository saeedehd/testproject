import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertdialogComponent } from './insertdialog.component';

describe('InsertdialogComponent', () => {
  let component: InsertdialogComponent;
  let fixture: ComponentFixture<InsertdialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsertdialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertdialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
