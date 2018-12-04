import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ModalStatusService } from "../../services/modal-status.service"
import * as $ from 'jquery';

@Component({
    selector: 'app-firm-information',
    templateUrl: './firm-information.component.html',
    styleUrls: ['./firm-information.component.scss']
})
export class FirmInformationComponent implements OnInit {

    @Input() step: number = 1;
    @Input() singleModal: boolean = false;

    @Output() endEvent = new EventEmitter<boolean>();
    constructor(private router: Router, private modalStatus: ModalStatusService) {
        $(document).ready(function () {
            var nr = 0;
            $(document).on('dragover dragenter', '#browse-holder', function (e) {
                e.preventDefault();
                e.stopPropagation();
            }).on('drop', '#browse-holder', function (e, ui) {
                var dataTransfer = e.originalEvent.dataTransfer;
                if (dataTransfer && dataTransfer.files.length) {
                    e.preventDefault();
                    e.stopPropagation();
                    $.each(dataTransfer.files, function (i, file) {
                        var reader = new FileReader();
                        reader.onload = $.proxy(function (file, $fileList, event) {
                            nr++;
                            var img = file.type.match('image.*') ? "<img  id=\"resizable" + nr + "\" class=\"resizable\" style='width: 200px;'  src='" + event.target.result + "' /> " : "";
                            $fileList.append(img);

                        }, this, file, $("#droppable"));
                        $("#browse-holder").css("justify-content", "space-between");
                        $("#droppable").css("display", "flex");
                        reader.readAsDataURL(file);
                    });
                }
                $(this).addClass("ui-state-highlight").find("p").html("Dropped!");
            })
        });
    }

    setResizable(id) {
        console.log('setResizable');
    }

    ngOnInit() {
    }
    toPrev() {
        if(this.singleModal) {
            this.closeMe();
        }
        else {
            this.step--;    
        }
        
    }
    toNext() {
        // do some transactions here...
        this.step++;
        if (this.step === 3) {
            this.endEvent.emit(true);
        }
    }

    closeMe() {
        this.modalStatus.SET_firmInformation(false);
    }

}
