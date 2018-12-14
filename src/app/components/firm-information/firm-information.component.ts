import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ModalStatusService } from "../../services/modal-status.service"
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
declare var $ :any;

@Component({
    selector: 'app-firm-information',
    templateUrl: './firm-information.component.html',
    styleUrls: ['./firm-information.component.scss']
})
export class FirmInformationComponent implements OnInit {
    frmStep1 : FormGroup;
    frmStep2 : FormGroup;
    frmS2Avatar: string = '';
    @Input() step: number = 1;
    @Input() singleModal: boolean = false;

    @Output() endEvent = new EventEmitter<boolean>();
    constructor(private router: Router, private modalStatus: ModalStatusService, private fb: FormBuilder) {}

    setResizable(id) {
        console.log('setResizable');
    }
    onUploadSuccess2(event) {
        console.log(event);
        this.frmS2Avatar = event[0].dataURL;
    }
    ngOnInit() {
        this.frmStep1 = this.fb.group({
            firstName: ['', [Validators.required]],
            url : ['', [Validators.required]]
        })
        this.frmStep2 = this.fb.group({
            avatar: ['', [Validators.required]]
        })
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
        window.scroll(0,0);
    }

    closeMe() {
        this.modalStatus.SET_firmInformation(false);
    }

}
