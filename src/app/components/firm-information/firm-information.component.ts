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
      $('#droppable').on({
        'dragover dragenter': function(e) {
          e.preventDefault();
          e.stopPropagation();
        },
        'drop': function(e, ui) {
          //console.log(e.originalEvent instanceof DragEvent);
          var dataTransfer = e.originalEvent.dataTransfer;
          if (dataTransfer && dataTransfer.files.length) {
            e.preventDefault();
            e.stopPropagation();
            $.each(dataTransfer.files, function(i, file) {
              var reader = new FileReader();
              reader.onload = $.proxy(function(file, $fileList, event) {
                nr++;
                var img = file.type.match('image.*') ? "<img  id=\"resizable"+nr+"\" class=\"resizable\" src='" + event.target.result + "' /> " : "";
                $fileList.prepend($("<span>").append(img + file.name));
                // this.setResizable("resizable"+nr);
              }, this, file, $("#fileList"));
              reader.readAsDataURL(file);
            });
          }
          $(this).addClass("ui-state-highlight").find("p").html("Dropped!");
        }

        
      });
    });  

  }

  setResizable(id){
    // $("#" + id).resizable({
    //   stop: function(event, ui) {
    //     height = $("#" + id).height();
    //     width = $("#" + id).width();
    //     console.log("width=height=" + width + "==" + height);
    //   }
    // });
  }

  ngOnInit() {
    
  }

  

 
}
