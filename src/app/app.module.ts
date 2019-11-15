import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import {AppComponent} from './app.component'
import {Twbcomponent} from './twb.component'
import { drdvClass} from './drdv.component'
import {StlComponent} from './stl.component'
import {NComponent} from './ngl.component'
import {BankAccount} from './inpt1.component'
import {App} from './inpt1.component'
import {Bootstrap} from './btstrp.component'
import {OtptComponent} from './otpt.component';
import { MycompoComponent } from './mycompo/mycompo.component'
import { Mycompo1Component } from './mycompo/mycompo1.component'
import { Mycompo2Component } from './mycompo/mycompo2.component'
import { NgModelGroupComp } from './mycompo/mycompo3.component'
import { Mycompo4Component } from './mycompo/mycompo4.component'


import { checkboxclass } from './mycompo/checkbox.component'
import { submitclass } from './mycompo/lab4.component';


import { RouterModule } from '@angular/router';

import { GradesComponent } from './grades/grades.component';
import { DatesheetComponent } from './datesheet/datesheet.component';
import { MTEComponent } from './mte/mte.component'

@NgModule({
  declarations: [
    AppComponent,
	Twbcomponent,
	drdvClass,
	StlComponent,
	NComponent,
	BankAccount,
	App,
	Bootstrap,
	OtptComponent,
	MycompoComponent,
	Mycompo1Component,
	Mycompo2Component,
	NgModelGroupComp,
	Mycompo4Component,
	submitclass,
	checkboxclass,
	GradesComponent,
	DatesheetComponent,
	MTEComponent,
	
  ],
  imports: [
    BrowserModule,
	RouterModule.forRoot([
	{
		path: '',
		component: AppComponent
	},
	{
		path: 'grades',
		component: GradesComponent
	},
	{
		path: 'datesheet',
		component: DatesheetComponent
	}
	]),
	
    AppRoutingModule,
	FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
