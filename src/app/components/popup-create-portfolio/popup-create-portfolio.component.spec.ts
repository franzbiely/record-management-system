import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupCreatePortfolioComponent } from './popup-create-portfolio.component';

describe('PopupCreatePortfolioComponent', () => {
  let component: PopupCreatePortfolioComponent;
  let fixture: ComponentFixture<PopupCreatePortfolioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopupCreatePortfolioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupCreatePortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
