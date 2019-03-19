import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlexChartDemoPage } from './flex-chart-demo.page';

describe('FlexChartDemoPage', () => {
  let component: FlexChartDemoPage;
  let fixture: ComponentFixture<FlexChartDemoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlexChartDemoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlexChartDemoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
