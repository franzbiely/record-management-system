import { Component, OnInit } from '@angular/core';

declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-input-percent',
  templateUrl: './input-percent.component.html',
  styleUrls: ['./input-percent.component.scss']
})
export class InputPercentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(document).on( 'change focus keyup', '.rms-input-percent input', function(){
      if ( $(this).val() !== '' ) {
        $(this).parent().addClass( 'active' );
      } else {
        $(this).parent().removeClass( 'active' );
      }
    });
  }

}
