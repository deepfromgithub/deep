
import { Component } from '@angular/core';

@Component({
  selector: 'twb',
  template: `<input [(ngModel)]="name" (keyUp.enter)="changename()">
  <button (click)="changename()">Change Name</button>`
})
export class Twbcomponent{
  name="ravi";
  changename(){
	  console.log(this.name);
	  
	  
  }
}
