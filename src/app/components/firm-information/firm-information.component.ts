import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-firm-information',
  templateUrl: './firm-information.component.html',
  styleUrls: ['./firm-information.component.scss']
})
export class FirmInformationComponent implements OnInit {

  constructor() { 
    $(document).ready(function(){
      var nr =0;
      $('#browse-holder').on({
        'dragover dragenter': function(e) {
          e.preventDefault();
          e.stopPropagation();
        },
        'drop': function(e, ui) {
          var dataTransfer = e.originalEvent.dataTransfer;
          if (dataTransfer && dataTransfer.files.length) {
            e.preventDefault();
            e.stopPropagation();
            $.each(dataTransfer.files, function(i, file) {
              var reader = new FileReader();
              reader.onload = $.proxy(function(file, $fileList, event) {
                nr++;
                var img = file.type.match('image.*') ? "<img  id=\"resizable"+nr+"\" class=\"resizable\" style='width: 200px;'  src='" + event.target.result + "' /> " : "";
                $fileList.append(img);

              }, this, file, $("#droppable"));
              $("#browse-holder").css("justify-content", "space-between");
              $("#droppable").css("display", "flex");
              reader.readAsDataURL(file);
            });
          }
          $(this).addClass("ui-state-highlight").find("p").html("Dropped!");
        }
      });
    });  

  }

  setResizable(id) {
    console.log("setResizable");
  }

  ngOnInit() {
    
  }

  

 
}
