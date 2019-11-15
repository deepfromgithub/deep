import { Component } from '@angular/core';

@Component({
    selector:'directives',
    template:`

    <input type="text" class="form-control" [ngSwitch]="row">
      

                
    } 
<button [ngStyle]="
{
  'backgroundColor':bgcolor1,
  'color':color1,
  'fontWeight':whgt
 } 
 
 "> Click Here </button>
    
    
    
    `
})

export class ADComponent{

   
    c1="blue";
    c2="green";
    whgt="bold";
	row="Amritsar";



}