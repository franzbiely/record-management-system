import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownCapitalAppreciationComponent } from './dropdown-capital-appreciation.component';

describe('DropdownCapitalAppreciationComponent', () => {
  let component: DropdownCapitalAppreciationComponent;
  let fixture: ComponentFixture<DropdownCapitalAppreciationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DropdownCapitalAppreciationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DropdownCapitalAppreciationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
