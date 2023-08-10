import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCurriculumsComponent } from './create-curriculums.component';

describe('CreateCurriculumsComponent', () => {
  let component: CreateCurriculumsComponent;
  let fixture: ComponentFixture<CreateCurriculumsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateCurriculumsComponent]
    });
    fixture = TestBed.createComponent(CreateCurriculumsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
