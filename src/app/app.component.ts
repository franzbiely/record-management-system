import { Component } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'record-management-sys';
  constructor() {
    $(function () {
      $(document).on('click', 'details', function () {
        $('details').not(this).removeAttr('open');
      });
    });
  }

}
