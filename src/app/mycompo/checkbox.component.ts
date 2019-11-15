
import { Component} from '@angular/core';

@Component({
  selector: 'checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./mycompo.component.css']
})
export class checkboxclass{
	city=[
	{id:1, name:"LDH"},
	{id:2, name:"ASR"},
	{id:3, name:"JLD"}
	];
log(val)
{
	console.log(val);
}
}
