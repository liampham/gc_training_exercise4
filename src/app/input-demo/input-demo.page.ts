import { Component, OnInit } from '@angular/core';

import * as wjInput from 'wijmo/wijmo.input';
import * as wj from 'wijmo/wijmo';
@Component({
  selector: 'app-input-demo',
  templateUrl: './input-demo.page.html',
  styleUrls: ['./input-demo.page.scss'],
})
export class InputDemoPage implements OnInit {
  theInputDateOnly: wjInput.InputDate;
  theInputTimeOnly: wjInput.InputTime;
  theInputDateTime: wjInput.InputDateTime;

  constructor() { }

  ngOnInit() {
    var target = this;
    this.theInputDateOnly = new wjInput.InputDate('#theInputDateOnly', {
      valueChanged: function (e) {
        target.onValueChanged(e)
      }
    });

    this.theInputTimeOnly = new wjInput.InputTime('#theInputTimeOnly', {
      valueChanged: function (e) {
        target.onValueChanged(e)
      }
    });

    // or edit the whole thing
    this.theInputDateTime = new wjInput.InputDateTime('#theInputDateTime', {
      valueChanged: function (e) {
        target.onValueChanged(e)
      }
    });

    // initialize and update the date/time value
    var dt = new Date();
    dt.setHours(17, 30);
    this.setDateTime(dt);

  }
  onValueChanged(e) {
    this.setDateTime(e.value);
  }
  setDateTime(value) {
    var el = document.getElementById('dateTime');
    el.textContent = wj.Globalize.format(value, 'F')
    this.theInputDateOnly.value = value;
    this.theInputTimeOnly.value = value;
    this.theInputDateTime.value = value;
  }

}
