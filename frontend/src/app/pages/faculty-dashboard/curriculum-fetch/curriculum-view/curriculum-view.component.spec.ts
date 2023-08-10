import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurriculumViewComponent } from './curriculum-view.component';

describe('CurriculumViewComponent', () => {
  let component: CurriculumViewComponent;
  let fixture: ComponentFixture<CurriculumViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CurriculumViewComponent]
    });
    fixture = TestBed.createComponent(CurriculumViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
