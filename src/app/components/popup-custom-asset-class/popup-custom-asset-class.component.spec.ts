import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupCustomAssetClassComponent } from './popup-custom-asset-class.component';

describe('PopupCustomAssetClassComponent', () => {
  let component: PopupCustomAssetClassComponent;
  let fixture: ComponentFixture<PopupCustomAssetClassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopupCustomAssetClassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupCustomAssetClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
