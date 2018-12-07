import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupCreatePortfolioScreensComponent } from './popup-create-portfolio-screens.component';

describe('PopupCreatePortfolioScreensComponent', () => {
  let component: PopupCreatePortfolioScreensComponent;
  let fixture: ComponentFixture<PopupCreatePortfolioScreensComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopupCreatePortfolioScreensComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupCreatePortfolioScreensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
