import { Component, OnInit } from '@angular/core';

import * as wjcGrid from 'wijmo/wijmo.grid';
import * as wj from 'wijmo/wijmo';
@Component({
  selector: 'app-flex-grid-demo',
  templateUrl: './flex-grid-demo.page.html',
  styleUrls: ['./flex-grid-demo.page.scss'],
})
export class FlexGridDemoPage implements OnInit {

  constructor() { }

  ngOnInit() {

    var theGrid = new wjcGrid.FlexGrid('#theGrid', {
      autoGenerateColumns: false,
      showAlternatingRows: false,
      showSelectedHeaders: 'All',
      deferResizing: false,
      itemsSource: this.getData(10000),
      columns: [
        { header: 'ID', binding: 'id', width: 80, isReadOnly: true },
        { header: 'Date', binding: 'date', format: 'MMM d, yyyy' },
        { header: 'Country', binding: 'country', dataMap: this.getCountries() },
        { header: 'Product', binding: 'product', dataMap: this.getProducts() },
        { header: 'Active', binding: 'active', width: 80 },
        { header: 'Downloads (k)', binding: 'transactions.downloads', format: 'n2,', aggregate: 'Sum' },
        { header: 'Sales (k)', binding: 'transactions.sales', format: 'c2,', aggregate: 'Sum' },
        { header: 'Expenses (k)', binding: 'transactions.expenses', format: 'c2,', aggregate: 'Sum' }
      ]
    });

    theGrid.getColumn('country').dataMap.isEditable = true;
    theGrid.getColumn('product').dataMap.isEditable = true;

  }

   getCountries() {
    return [
    	'US', 'Canada', 'Mexico', 'Brazil',
      'Germany', 'UK', 'France', 'Italy', 'Spain', 'Portugal',
      'Japan', 'China', 'Korea'
		];
	}
	 getProducts() {
    return [
    	'Phones', 'Cars', 'Planes', 'Boats', 'Computers' ,'Watches'
		];
	}
   getData(cnt) {
    var data = [],
        countries = this.getCountries(),
        products = this.getProducts(),
        today = new Date();
    for (var i = 0; i < cnt; i++) {
      data.push({
        id: i,
        date: wj.DateTime.addDays(today, -Math.random() * 365),
        country: countries[i % countries.length],
        product: products[i % products.length],
        active: i % 5 != 0,
        transactions: {
	        downloads: Math.round(Math.random() * 200000),
	        sales: Math.random() * 100000,
	        expenses: Math.random() * 50000
        },
      });
    }
    return data;
  }
}
