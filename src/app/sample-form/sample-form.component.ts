import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-sample-form',
	templateUrl: './sample-form.component.html',
	styleUrls: [ './sample-form.component.css' ]
})
export class SampleFormComponent implements OnInit {
	inputValue: string;

	constructor() {}

	ngOnInit() {}

	clickSubmit() {
		this.inputValue = this.inputValue.toUpperCase();
	}
}
