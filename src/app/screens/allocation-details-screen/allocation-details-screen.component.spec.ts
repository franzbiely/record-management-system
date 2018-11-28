import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllocationDetailsScreenComponent } from './allocation-details-screen.component';

describe('AllocationDetailsScreenComponent', () => {
  let component: AllocationDetailsScreenComponent;
  let fixture: ComponentFixture<AllocationDetailsScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllocationDetailsScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllocationDetailsScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
