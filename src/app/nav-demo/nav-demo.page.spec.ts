import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavDemoPage } from './nav-demo.page';

describe('NavDemoPage', () => {
  let component: NavDemoPage;
  let fixture: ComponentFixture<NavDemoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavDemoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavDemoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
