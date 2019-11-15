import { Component } from '@angular/core';

@Component({
  selector: 'drdv',
  template: `<div *ngIf="arr.length>0">
  Array has element.</div>
  <div *ngIf="arr.length==0">
  Array is empty.</div>`
})
export class drdvClass{
 arr=[];
}
