import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-dash-box',
    templateUrl: './dash-box.component.html',
    styleUrls: ['./dash-box.component.scss']

})
export class DashBoxComponent implements OnInit {
    @Input() isNew: boolean;
    @Input() title: string;
    @Input() subTitle: string;
    @Input() addLabel: string;
    @Input() data: any;
    @Input() addAction: Function;
    @Input() headerRightType: string;

    recent = '';
    isHidden = false;
    array = ['Households', 'Proposals', 'Documents'];

    modalHousehold: boolean = false;

    constructor() { }

    ngOnInit() {
        for (let i = 0; i < this.array.length; i++) {
            if (this.title === this.getRecent(i)){
                this.recent = this.array[i]
                this.isHidden = false
            }
            if (this.title == this.getRecent(2))
                this.isHidden = true
          }
    }

    getRecent(i){
        return "Recent "+this.array[i]
    }

    @Output() addHousehold = new EventEmitter();
    counter = 0;

    showModalHousehold() {
        this.addHousehold.emit(!this.modalHousehold);
    }
}
