import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grades',
  templateUrl: './grades.component.html',
  styleUrls: ['./grades.component.css']
})
export class GradesComponent implements OnInit {

grades=[
	{courses:'CAP916', grades:'B'},
	{courses:'CAP917', grades:'A+'},
	{courses:'CAP918', grades:'A'}
	];

  constructor() { }

  ngOnInit() {
  }

}
