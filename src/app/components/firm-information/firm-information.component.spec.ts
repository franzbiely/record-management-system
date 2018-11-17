import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirmInformationComponent } from './firm-information.component';

describe('FirmInformationComponent', () => {
  let component: FirmInformationComponent;
  let fixture: ComponentFixture<FirmInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirmInformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirmInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
