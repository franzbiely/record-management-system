import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

	@Input() isDisabled: boolean;
	
	logo_path = 'assets/upload-logo-replacement.svg';
	logo_path_2 = 'assets/upload-logo-replacement@2x.svg 2x'
	logo_path_3 = 'assets/upload-logo-replacement@3x.svg 3x'

  	constructor() {}
  


  

  ngOnInit() {
  	if(!this.isDisabled) {
  		this.logo_path = 'assets/loring-ward-color.png';
		this.logo_path_2 = 'assets/loring-ward-color@2x.png 2x'
		this.logo_path_3 = 'assets/loring-ward-color@3x.png 3x'	
  	}
  }

}
