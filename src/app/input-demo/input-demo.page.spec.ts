import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputDemoPage } from './input-demo.page';

describe('InputDemoPage', () => {
  let component: InputDemoPage;
  let fixture: ComponentFixture<InputDemoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputDemoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputDemoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
