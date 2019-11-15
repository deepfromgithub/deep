
import { Component} from '@angular/core';

@Component({
  selector: 'mycompo1',
  templateUrl: './mycompo1.component.html',
  styleUrls: ['./mycompo.component.css']
})
export class Mycompo1Component {

 log(val)
 {
	 console.log(val);
 }

}
