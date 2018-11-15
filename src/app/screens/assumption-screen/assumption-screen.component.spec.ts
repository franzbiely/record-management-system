import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssumptionScreenComponent } from './assumption-screen.component';

describe('AssumptionScreenComponent', () => {
  let component: AssumptionScreenComponent;
  let fixture: ComponentFixture<AssumptionScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssumptionScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssumptionScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
