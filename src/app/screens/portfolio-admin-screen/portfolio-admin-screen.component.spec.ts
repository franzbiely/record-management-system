import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioAdminScreenComponent } from './portfolio-admin-screen.component';

describe('PortfolioAdminScreenComponent', () => {
  let component: PortfolioAdminScreenComponent;
  let fixture: ComponentFixture<PortfolioAdminScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortfolioAdminScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioAdminScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
