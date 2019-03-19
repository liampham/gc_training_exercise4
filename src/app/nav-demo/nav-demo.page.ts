import { Component, OnInit } from '@angular/core';
import * as wjNav from 'wijmo/wijmo.nav';
@Component({
  selector: 'app-nav-demo',
  templateUrl: './nav-demo.page.html',
  styleUrls: ['./nav-demo.page.scss'],
})
export class NavDemoPage implements OnInit {

  constructor() { }

  ngOnInit() {
    new wjNav.TabPanel('#theTabPanel');
  }

}
