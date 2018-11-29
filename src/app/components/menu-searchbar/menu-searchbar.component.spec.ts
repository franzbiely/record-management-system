import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuSearchbarComponent } from './menu-searchbar.component';

describe('MenuSearchbarComponent', () => {
  let component: MenuSearchbarComponent;
  let fixture: ComponentFixture<MenuSearchbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuSearchbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuSearchbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
