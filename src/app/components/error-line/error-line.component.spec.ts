import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorLineComponent } from './error-line.component';

describe('ErrorLineComponent', () => {
  let component: ErrorLineComponent;
  let fixture: ComponentFixture<ErrorLineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErrorLineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
