import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TargetAssetAllocationComponent } from './target-asset-allocation.component';

describe('TargetAssetAllocationComponent', () => {
  let component: TargetAssetAllocationComponent;
  let fixture: ComponentFixture<TargetAssetAllocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TargetAssetAllocationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TargetAssetAllocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
