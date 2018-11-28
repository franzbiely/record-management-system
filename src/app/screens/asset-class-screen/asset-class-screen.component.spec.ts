import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetClassScreenComponent } from './asset-class-screen.component';

describe('AssetClassScreenComponent', () => {
  let component: AssetClassScreenComponent;
  let fixture: ComponentFixture<AssetClassScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssetClassScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssetClassScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
