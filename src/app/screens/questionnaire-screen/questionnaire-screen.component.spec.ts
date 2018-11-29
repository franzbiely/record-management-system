import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionnaireScreenComponent } from './questionnaire-screen.component';

describe('QuestionnaireScreenComponent', () => {
  let component: QuestionnaireScreenComponent;
  let fixture: ComponentFixture<QuestionnaireScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionnaireScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionnaireScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
