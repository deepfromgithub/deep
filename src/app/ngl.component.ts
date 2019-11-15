import { Component } from '@angular/core';

@Component({
  selector: 'ngl',
  template:`
  
  <button [class.btn-primary]=true [class.btn]=true
   [class.active]="isActive">Click</button>
  <button [ngClass]="
  {
	  'btn':true,
	  'btn-primary':true,
	  'active':isActive,
	  'state':isNotActive
  }
  ">Button</button>
  
  `
  
  
})
export class NComponent{
 isActive=true;
 isNotactive=true;
}
