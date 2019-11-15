import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datesheet',
  templateUrl: './datesheet.component.html',
  styleUrls: ['./datesheet.component.css']
})
export class DatesheetComponent implements OnInit {

datesheet=[
	{courses:'CAP916', Date:'16-10-98'},
	{courses:'CAP917', Date:'17-10-98'},
	{courses:'CAP918', Date:'18-10-98'}
	];
  constructor() { }

  ngOnInit() {
  }

}
