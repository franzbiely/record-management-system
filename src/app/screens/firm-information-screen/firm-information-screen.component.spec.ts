import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirmInformationScreenComponent } from './firm-information-screen.component';

describe('FirmInformationScreenComponent', () => {
  let component: FirmInformationScreenComponent;
  let fixture: ComponentFixture<FirmInformationScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirmInformationScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirmInformationScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
