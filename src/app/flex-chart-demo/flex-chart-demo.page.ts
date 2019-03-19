import { Component, OnInit } from '@angular/core';

import * as wjcChart from 'wijmo/wijmo.chart';
import * as wjInput from 'wijmo/wijmo.input';

@Component({
  selector: 'app-flex-chart-demo',
  templateUrl: './flex-chart-demo.page.html',
  styleUrls: ['./flex-chart-demo.page.scss'],
})
export class FlexChartDemoPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  
  ionViewWillEnter () {

    let chart = new wjcChart.FlexChart("#FlextChartContainer", {
      itemsSource: this.getData(),
      bindingX: 'country',
      series: [
        { binding: 'sales', name: 'Sales' },
        { binding: 'expenses', name: 'Expenses' },
        { binding: 'downloads', name: 'Downloads' }
      ]
    });
    
    

    var theChartType = new wjInput.ComboBox('#chartType', {
      itemsSource: 'Column,Bar,Scatter,Line,LineSymbols,Area,Spline,SplineSymbols,SplineArea'.split(','),
      textChanged: function(s, e) {
        chart.series[2].chartType = s.text;
      },
      text: 'LineSymbols'
    });

  }
  getData() {
    var countries = 'US,Germany,UK,Japan,Italy,Greece'.split(','),
      data = [];
    for (var i = 0; i < countries.length; i++) {
      data.push({
        country: countries[i],
        sales: Math.random() * 10000,
        expenses: Math.random() * 5000,
        downloads: Math.round(Math.random() * 20000)
      });
    }
    data[3].downloads = 17000;
    return data;
  }

}
