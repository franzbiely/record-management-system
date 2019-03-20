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
      $(document).on('click', '.btn-apply, .primary, .icon-dropdown', function () {
        $(this).closest('details').removeAttr('open');
        $('details').removeAttr('open');
      });
      $(document).on('click', '.icon-dropdown', function () {
        var $parents = $(".caption").parents("div");
        $parents[0].addClass("has-img-caption"); // select the first div add add the class.
        $('details').parentsUntil('.dropdown-actions').find('details').removeAttr('open');;
      });
    });
  }

}
