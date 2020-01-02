import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateBottomComponent } from './update-bottom.component';

describe('UpdateBottomComponent', () => {
  let component: UpdateBottomComponent;
  let fixture: ComponentFixture<UpdateBottomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateBottomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateBottomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
