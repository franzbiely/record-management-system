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
      $(document).on('click', '.btn-apply, .primary', function () {
        $(this).closest('details').removeAttr('open');
        $('details').removeAttr('open');
      });
      $(document).on('click', '.icon-dropdown', function () {
        var $parents = $(".dropdown-actions").parents("div");
          $parents[0].addClass("has-img-caption"); // need this error to hide dropdown details
        $('details').parentsUntil('.dropdown-actions').find('details').removeAttr('open');;
      });
    });
  }

}
