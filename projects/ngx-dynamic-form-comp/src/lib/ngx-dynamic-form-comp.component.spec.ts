import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxDynamicFormCompComponent } from './ngx-dynamic-form-comp.component';

describe('NgxDynamicFormCompComponent', () => {
  let component: NgxDynamicFormCompComponent;
  let fixture: ComponentFixture<NgxDynamicFormCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxDynamicFormCompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxDynamicFormCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
