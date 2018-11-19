import { Component, OnInit } from '@angular/core';

declare var jquery: any;
declare var $: any;

@Component({
    selector: 'app-security-dropdown-autocomplete',
    templateUrl: './security-dropdown-autocomplete.component.html',
    styleUrls: ['./security-dropdown-autocomplete.component.scss']
})
export class SecurityDropdownAutocompleteComponent implements OnInit {
    private sampleData: Array<Object> = [
        {
            'name': 'SA US Value Select',
            'code': 'SAVLX'
        },
        {
            'name': 'SA Global Fixed Income Select',
            'code': 'SAFLX'
        },
        {
            'name': 'SA US Small Company Select',
            'code': 'SASLX'
        }
    ];

    items = [];

    constructor() {}

    ngOnInit() {
        const data  = this.sampleData;
        const _this = this;

        $(document).on( 'keyup', '.rms-dd-input', function() {
            const element = $(this);

            const find = $(this).val().toUpperCase().split( ',' ).filter(function(v) {
                return v !== '';
            });

            const validator = [];
            const results   = [];

            console.clear();

            $.each( find, function(fi, f) {
                $.each( data, function(di, d) {
                    const code = d['code'];

                    if ( code.search( f ) > -1 && $.inArray( code, validator ) === -1 ) {
                        validator.push( code );
                        results.push( d );
                    }
                });
            });

            if ( results.length > 0 ) {
                _this.items = [];

                $.each( results, function(i, result) {
                    _this.items.push( result );
                });

                element.parent().addClass( 'active' );
            } else {
                element.parent().removeClass( 'active' );
            }
        });
    }

    showResults() {
        this.items.push(this.items);
    }

}
